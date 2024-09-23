const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configuring JWT Strategy for Passport
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const jwtSecret = 'geDteDd0Ltg2135FJYQ6rjNYHYkGQa70'; // Secret for JWT signing

// Initialize Express app
const app = express();
app.use(bodyParser.json());

// PostgreSQL connection pool setup
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'varzik',
    password: 'geDteDd0Ltg2135FJYQ6rjNYHYkGQa70',
    port: 5432,
});


// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'uploads/';
        if (!fs.existsSync(uploadDir)){
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir); // Save files to the 'uploads/' directory
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname); // Get the file extension
        cb(null, `${req.user.id}-${Date.now()}${ext}`); // File name: userId-timestamp.extension
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // Limit to 10MB
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Only images (jpeg, jpg, png) are allowed!'));
        }
    }
});


// JWT options
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

// JWT strategy to authenticate users
const strategy = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT id, email, phone, access FROM users WHERE id = $1', [payload.id]);
    client.release();

    const user = result.rows[0];
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (err) {
    return done(err, false);
  }
});

passport.use(strategy);
app.use(passport.initialize());

// Middleware to ensure user has normal access (access = 0)
function ensureUserAccess(req, res, next) {
  if (req.user.access !== 0) {
    return res.status(403).json({ message: 'Access denied. You must be a normal user.' });
  }
  next();
}

// Middleware to ensure coach access (access = 1)
function ensureCoachAccess(req, res, next) {
    if (req.user.access !== 1) {
      return res.status(403).json({ message: 'Access denied. You must be a coach.' });
    }
    next();
  }

  // API for users to upload profile picture
app.post('/user/upload-profile-pic', 
    passport.authenticate('jwt', { session: false }), 
    ensureUserAccess, 
    upload.single('profile_pic'), // Handling single image upload with field name 'profile_pic'
    async (req, res) => {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const picUrl = `/uploads/${req.file.filename}`; // Generate URL for the file
        try {
            const client = await pool.connect();
            await client.query(
                'INSERT INTO users_pics (user_id, pic_url, updated_at) VALUES ($1, $2, CURRENT_TIMESTAMP) ON CONFLICT (user_id) DO UPDATE SET pic_url = EXCLUDED.pic_url, updated_at = CURRENT_TIMESTAMP',
                [req.user.id, picUrl]
            );
            client.release();

            return res.json({ message: 'Profile picture uploaded successfully', pic_url: picUrl });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to upload profile picture' });
        }
    }
);


// API for users to rate a coach
app.post('/user/rate-coach/:coachId', passport.authenticate('jwt', { session: false }), ensureUserAccess, async (req, res) => {
    const { stars } = req.body;
    const { coachId } = req.params;
  
    if (stars < 0 || stars > 5) {
      return res.status(400).json({ message: 'Rating must be between 0 and 5 stars.' });
    }
  
    try {
      const client = await pool.connect();
  
      // Check if the coach exists
      const coachCheck = await client.query('SELECT * FROM users WHERE id = $1 AND access = 1', [coachId]);
      if (coachCheck.rows.length === 0) {
        client.release();
        return res.status(404).json({ message: 'Coach not found.' });
      }
  
      // Insert or update the rating for the coach by the user
      await client.query(
        'INSERT INTO coaches_ratings (user_id, coach_id, stars, rated_at) VALUES ($1, $2, $3, CURRENT_TIMESTAMP) ON CONFLICT (user_id, coach_id) DO UPDATE SET stars = EXCLUDED.stars, rated_at = CURRENT_TIMESTAMP',
        [req.user.id, coachId, stars]
      );
      client.release();
  
      return res.json({ message: 'Coach rated successfully.' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to rate the coach.' });
    }
  });

  // API to fetch all coaches with average ratings above 3.5
app.get('/user/coaches-above-3.5', passport.authenticate('jwt', { session: false }), ensureUserAccess, async (req, res) => {
    try {
      const client = await pool.connect();
  
      // Get coaches with average rating above 3.5
      const result = await client.query(`
        SELECT u.id, u.email, AVG(cr.stars) as avg_rating
        FROM users u
        JOIN coaches_ratings cr ON u.id = cr.coach_id
        WHERE u.access = 1
        GROUP BY u.id
        HAVING AVG(cr.stars) > 3.5
      `);
      client.release();
  
      return res.json({ coaches: result.rows });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to fetch coaches with ratings above 3.5.' });
    }
  });

  
// API for coaches to fetch their ratings
app.get('/coach/my-ratings', passport.authenticate('jwt', { session: false }), ensureCoachAccess, async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM coaches_ratings WHERE coach_id = $1', [req.user.id]);
      client.release();
  
      return res.json({ ratings: result.rows });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to fetch your ratings.' });
    }
  });

  
// API for coaches to upload profile picture
app.post('/coach/upload-profile-pic', 
    passport.authenticate('jwt', { session: false }), 
    ensureCoachAccess, 
    upload.single('profile_pic'), // Handling single image upload with field name 'profile_pic'
    async (req, res) => {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const picUrl = `/uploads/${req.file.filename}`; // Generate URL for the file
        try {
            const client = await pool.connect();
            await client.query(
                'INSERT INTO users_pics (user_id, pic_url, updated_at) VALUES ($1, $2, CURRENT_TIMESTAMP) ON CONFLICT (user_id) DO UPDATE SET pic_url = EXCLUDED.pic_url, updated_at = CURRENT_TIMESTAMP',
                [req.user.id, picUrl]
            );
            client.release();

            return res.json({ message: 'Profile picture uploaded successfully', pic_url: picUrl });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to upload profile picture' });
        }
    }
);
  
  // API to edit user plans (coach only)
  app.put('/coach/edit-user-plan/:planId', passport.authenticate('jwt', { session: false }), ensureCoachAccess, async (req, res) => {
    const { movements } = req.body;
    const { planId } = req.params;
  
    try {
      const client = await pool.connect();
      await client.query(
        'UPDATE users_plans SET movements = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2',
        [movements, planId]
      );
      client.release();
  
      return res.json({ message: 'User plan updated successfully' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to update user plan' });
    }
  });
  

// Get All User Plans
app.get('/user/plans', passport.authenticate('jwt', { session: false }), ensureUserAccess, async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users_plans WHERE user_id = $1', [req.user.id]);
    client.release();

    return res.json({ plans: result.rows });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to retrieve user plans' });
  }
});


// API to get all diets
app.get('/user/get/diets', passport.authenticate('jwt', { session: false }), ensureUserAccess, async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM diets');
      client.release();
  
      return res.json({ diets: result.rows });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to retrieve diets.' });
    }
  });

// API for user to choose a diet
app.post('/user/choose-diet/:dietId', passport.authenticate('jwt', { session: false }), ensureUserAccess, async (req, res) => {
    const { dietId } = req.params;
  
    try {
      const client = await pool.connect();
      const coachId = null; // This can be null for now or filled in if a coach assigns the diet later
  
      await client.query(
        'INSERT INTO users_diets (user_id, coach_id, diet, reg_at) VALUES ($1, $2, $3, CURRENT_TIMESTAMP)',
        [req.user.id, coachId, dietId]
      );
      client.release();
  
      return res.json({ message: 'Diet chosen successfully.' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to choose diet.' });
    }
  });

  
  // API to get all active coaches
app.get('/user/active-coaches', passport.authenticate('jwt', { session: false }), ensureUserAccess, async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM coach_info WHERE status = $1', ['active']);
      client.release();
  
      return res.json({ coaches: result.rows });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to retrieve active coaches.' });
    }
  });

  
  // API to get coach info
app.get('/user/coach-info/:coachId', passport.authenticate('jwt', { session: false }), ensureUserAccess, async (req, res) => {
    const { coachId } = req.params;
  
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM coach_info WHERE coach_id = $1', [coachId]);
      client.release();
  
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Coach not found.' });
      }
  
      return res.json({ coach: result.rows[0] });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to retrieve coach info.' });
    }
  });

  
  // API for coach to get user's medical record and workout info
app.get('/coach/user-info/:userId', passport.authenticate('jwt', { session: false }), ensureCoachAccess, async (req, res) => {
    const { userId } = req.params;
  
    try {
      const client = await pool.connect();
      const medicalResult = await client.query('SELECT * FROM users_medical_records WHERE user_id = $1', [userId]);
      const workoutResult = await client.query('SELECT * FROM users_workout_info WHERE user_id = $1', [userId]);
  
      client.release();
  
      return res.json({
        medical_records: medicalResult.rows[0] || {},
        workout_info: workoutResult.rows[0] || {}
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to retrieve user info.' });
    }
  });
  


// Get All User Diets
app.get('/user/diets', passport.authenticate('jwt', { session: false }), ensureUserAccess, async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users_diets WHERE user_id = $1', [req.user.id]);
    client.release();

    return res.json({ diets: result.rows });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to retrieve user diets' });
  }
});

// Get All User Coaches
app.get('/user/coaches', passport.authenticate('jwt', { session: false }), ensureUserAccess, async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users_coach WHERE user_id = $1', [req.user.id]);
    client.release();

    return res.json({ coaches: result.rows });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to retrieve user coaches' });
  }
});

// Update Workout Info
// API to update or insert workout information
app.put('/user/update-workout-info', passport.authenticate('jwt', { session: false }), ensureUserAccess, async (req, res) => {
  const { weight, age, height, sex, goal, level } = req.body;

  try {
    const client = await pool.connect();
    
    // Use INSERT ON CONFLICT to either insert or update the user's workout info
    await client.query(`
      INSERT INTO users_workout_info (user_id, weight, age, height, sex, goal, level, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, CURRENT_TIMESTAMP)
      ON CONFLICT (user_id)
      DO UPDATE SET weight = EXCLUDED.weight, age = EXCLUDED.age, height = EXCLUDED.height, sex = EXCLUDED.sex, goal = EXCLUDED.goal, level = EXCLUDED.level, updated_at = CURRENT_TIMESTAMP
    `, [req.user.id, weight, age, height, sex, goal, level]);

    client.release();
    
    return res.json({ message: 'Workout information updated successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to update workout information' });
  }
});


// Update Medical Records
// API to update or insert medical records
app.put('/user/update-medical-record', passport.authenticate('jwt', { session: false }), ensureUserAccess, async (req, res) => {
  const { content } = req.body;

  try {
    const client = await pool.connect();
    
    // Use INSERT ON CONFLICT to either insert or update the user's medical record
    await client.query(`
      INSERT INTO users_medical_records (user_id, content, updated_at)
      VALUES ($1, $2, CURRENT_TIMESTAMP)
      ON CONFLICT (user_id)
      DO UPDATE SET content = EXCLUDED.content, updated_at = CURRENT_TIMESTAMP
    `, [req.user.id, content]);

    client.release();
    
    return res.json({ message: 'Medical record updated successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to update medical record' });
  }
});

// Login and Register (combined)
app.post('/login', async (req, res) => {
    const { email, phone } = req.body;
  
    if (!email || !phone) {
      return res.status(400).json({ message: 'Email and phone are required.' });
    }
  
    try {
      const client = await pool.connect();
      
      // Check if the user already exists
      const query = 'SELECT * FROM users WHERE email = $1 OR phone = $2';
      const result = await client.query(query, [email, phone]);
  
      let user = result.rows[0];
  
      if (user) {
        // Update the login timestamp in the users_login table
        await client.query(
          'INSERT INTO users_login (user_id, loggedin_at) VALUES ($1, CURRENT_TIMESTAMP) ON CONFLICT (user_id) DO UPDATE SET loggedin_at = CURRENT_TIMESTAMP',
          [user.id]
        );
  
        // Generate a JWT token for the existing user
        const token = jwt.sign({ id: user.id, access: user.access }, jwtSecret, { expiresIn: '30d' });
        client.release();
        return res.json({ message: 'Login successful', token: token });
      } else {
        // If the user does not exist, register a new user
        const insertQuery = 'INSERT INTO users (email, phone) VALUES ($1, $2) RETURNING id, email, phone';
        const insertResult = await client.query(insertQuery, [email, phone]);
  
        user = insertResult.rows[0];
  
        // Insert a new login record in the users_login table
        await client.query(
          'INSERT INTO users_login (user_id, loggedin_at) VALUES ($1, CURRENT_TIMESTAMP)',
          [user.id]
        );
  
        // Generate a JWT token for the new user
        const token = jwt.sign({ id: user.id, access: user.access }, jwtSecret, { expiresIn: '30d' });
  
        client.release();
        return res.status(201).json({ message: 'User registered and logged in', token: token });
      }
  
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Login/Registration failed' });
    }
  });
  

// API to get all open wikis (plan_id = 0)
app.get('/user/wikis/', passport.authenticate('jwt', { session: false }), ensureUserAccess, async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM wiki WHERE plan_id = 0');
        client.release();

        return res.json({ wikis: result.rows });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to retrieve open wikis' });
    }
});

// API for coach to fetch all active students who have not finished their plans
app.get('/coach/active-students', passport.authenticate('jwt', { session: false }), ensureCoachAccess, async (req, res) => {
    try {
      const client = await pool.connect();
  
      // Query to get students (users) whose plan is not finished yet (progress < 100)
      const result = await client.query(`
        SELECT u.id AS user_id, u.email, up.progress, up.movements, up.reg_at
        FROM users u
        JOIN users_plans up ON u.id = up.user_id
        WHERE up.coach_id = $1 AND up.progress < 100
      `, [req.user.id]);
  
      client.release();
      return res.json({ active_students: result.rows });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to fetch active students.' });
    }
  });

  // Logout API
app.post('/logout', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
      const client = await pool.connect();
      
      // Update the loggedin_at field to 0 to indicate logout
      await client.query(
        'UPDATE users_login SET loggedin_at = to_timestamp(0) WHERE user_id = $1',
        [req.user.id]
      );
      
      client.release();
      return res.json({ message: 'Logout successful' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Logout failed' });
    }
  });
  
  
  // API for users to update their progress after finishing a day's exercise
app.put('/user/update-progress', passport.authenticate('jwt', { session: false }), ensureUserAccess, async (req, res) => {
    const planDurationDays = 30; // Assuming the plan is 30 days
    const progressIncrement = 100 / planDurationDays; // Each day increases progress by a fraction
  
    try {
      const client = await pool.connect();
  
      // Get the user's current plan where progress is not 100% (plan still ongoing)
      const planResult = await client.query('SELECT * FROM users_plans WHERE user_id = $1 AND progress < 100', [req.user.id]);
  
      if (planResult.rows.length === 0) {
        client.release();
        return res.status(404).json({ message: 'No active plan found for the user.' });
      }
  
      const currentPlan = planResult.rows[0];
      const newProgress = Math.min(currentPlan.progress + progressIncrement, 100); // Ensure we don't exceed 100%
  
      // Update the progress in the database
      await client.query(
        'UPDATE users_plans SET progress = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2',
        [newProgress, currentPlan.id]
      );
  
      client.release();
      return res.json({ message: 'Progress updated successfully.', progress: newProgress });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to update progress.' });
    }
  });
  

// API for coaches to update their info
app.put('/coach/update-info', passport.authenticate('jwt', { session: false }), ensureCoachAccess, async (req, res) => {
    const { info } = req.body;
  
    // Check if the 'info' field is provided
    if (!info) {
      return res.status(400).json({ message: 'Info field is required.' });
    }
  
    try {
      const client = await pool.connect();
  
      // Check if the coach info exists; if not, insert it
      const existingInfo = await client.query('SELECT * FROM coach_info WHERE coach_id = $1', [req.user.id]);
  
      if (existingInfo.rows.length > 0) {
        // Update existing info
        await client.query(
          'UPDATE coach_info SET info = $1, updated_at = CURRENT_TIMESTAMP WHERE coach_id = $2',
          [info, req.user.id]
        );
        client.release();
        return res.json({ message: 'Coach info updated successfully.' });
      } else {
        // Insert new info if none exists
        await client.query(
          'INSERT INTO coach_info (coach_id, info, updated_at) VALUES ($1, $2, CURRENT_TIMESTAMP)',
          [req.user.id, info]
        );
        client.release();
        return res.json({ message: 'Coach info created successfully.' });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to update coach info.' });
    }
  });
  

// API to get wikis for a specific user's plan (requires user access)
app.get('/user/wikis/:planId', passport.authenticate('jwt', { session: false }), ensureUserAccess, async (req, res) => {
    const { planId } = req.params;

    try {
        const client = await pool.connect();
        // Check if the user is assigned to the plan (optional validation)
        const userPlanCheck = await client.query('SELECT * FROM users_plans WHERE id = $1 AND user_id = $2', [planId, req.user.id]);

        if (userPlanCheck.rows.length === 0) {
            client.release();
            return res.status(404).json({ message: 'Plan not found or you do not have access to this plan' });
        }

        // Fetch wikis for the given plan_id
        const result = await client.query('SELECT * FROM wiki WHERE plan_id = $1', [planId]);
        client.release();

        return res.json({ wikis: result.rows });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to retrieve wikis for the plan' });
    }
});

// Check Token API
// Check Token API - Fetch user info from users, users_workout_info, and users_medical_records
app.get('/check-token', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const client = await pool.connect();
    
    // Check if the user is logged in (loggedin_at != 0)
    const loginResult = await client.query('SELECT loggedin_at FROM users_login WHERE user_id = $1', [req.user.id]);
    
    if (loginResult.rows.length === 0 || loginResult.rows[0].loggedin_at.getTime() === 0) {
      client.release();
      return res.status(401).json({ message: 'Please login.' });
    }
    
    // Fetch user info from users table
    const userInfoResult = await client.query('SELECT id, email, phone, access FROM users WHERE id = $1', [req.user.id]);
    const userInfo = userInfoResult.rows[0];
    
    // Fetch workout info from users_workout_info table
    const workoutInfoResult = await client.query('SELECT weight, age, height, sex, goal, level FROM users_workout_info WHERE user_id = $1', [req.user.id]);
    const workoutInfo = workoutInfoResult.rows[0] || {};

    // Fetch medical info from users_medical_records table
    const medicalInfoResult = await client.query('SELECT content FROM users_medical_records WHERE user_id = $1', [req.user.id]);
    const medicalInfo = medicalInfoResult.rows[0] || {};
    
    client.release();
    
    // Return combined user information
    return res.json({
      message: 'Token is valid',
      user: {
        ...userInfo,
        workout_info: workoutInfo,
        medical_info: medicalInfo
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Token validation failed.' });
  }
});

  

// Protected route (requires authentication)
app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: 'Access to protected route granted!', user: req.user });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
