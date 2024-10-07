const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const {Smsir} = require('./smsir')
const redis = require('redis'); // Import Redis
const OpenAIApi = require("openai");
const cors = require('cors');  // Import the cors package
const paypingApi = require("varzikpayping");
const callbackPayPingUrl = "https://www.postalart.ir"


// Initialize Redis client
const redisClient = redis.createClient({
  url: 'redis://default:geDteDd0Ltg2135FJYQ6rjNYHYkGQa70@localhost:6379' // Replace with your Redis connection details
});

// Connect the Redis client
(async () => {
  try {
    await redisClient.connect();
    console.log('Connected to Redis');
  } catch (err) {
    console.error('Redis connection error:', err);
  }
})();

// Handle Redis connection errors
redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

// Handle Redis disconnection
redisClient.on('end', () => {
  console.log('Disconnected from Redis');
});

// Configuring JWT Strategy for Passport
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const jwtSecret = 'geDteDd0Ltg2135FJYQ6rjNYHYkGQa70'; // Secret for JWT signing
const smstoken = "";
const openai_key = '';
const paypingKey = "";

const openai = new OpenAIApi({ apiKey: openai_key });

const defaultClient = paypingApi.ApiClient.instance;
const Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = paypingKey

// Initialize Express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// PostgreSQL connection pool setup
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'varzik',
    password: 'geDteDd0Ltg2135FJYQ6rjNYHYkGQa70',
    port: 5432,
});


const smsir = new Smsir(smstoken, 30007732905399)



const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000); // Generates a random number between 1000 and 9999
};


// Configure multer for file uploads
const Gptstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'uploads/gpt/docs/';
    if (!fs.existsSync(uploadDir)){
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir); // Save files to the 'uploads/' directory
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname); // Get the file extension
    cb(null, `${req.user.id}-${Date.now()}${ext}`); // File name: coachId-timestamp.extension
  }
});

const Gptupload = multer({
  storage: Gptstorage,
  limits: { fileSize: 20 * 1024 * 1024 }, // Limit to 20MB
  fileFilter: function (req, file, cb) {
    const filetypes = /|doc|xls|pdf/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only PNG, DOC, XLS, or PDF files are allowed!'));
    }
  }
});


// Configure multer for image uploads and append timestamp to filename
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      const uploadDir = 'uploads/images/';
      if (!fs.existsSync(uploadDir)){
          fs.mkdirSync(uploadDir, { recursive: true });
      }
      cb(null, uploadDir); // Save files to the 'uploads/images/' directory
  },
  filename: function (req, file, cb) {
      const ext = path.extname(file.originalname); // Get the file extension (e.g., .jpg, .png)
      const baseName = path.basename(file.originalname, ext); // Get the base name without extension
      const timestamp = Date.now(); // Get the current timestamp
      cb(null, `${baseName}-${timestamp}${ext}`); // File name: originalName-timestamp.extension
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit to 10MB for images
  fileFilter: function (req, file, cb) {
      const filetypes = /jpeg|jpg|png/; // Allow only jpeg, jpg, and png
      const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); // Check extension
      const mimetype = filetypes.test(file.mimetype); // Check mimetype
      
      if (mimetype && extname) {
          return cb(null, true); // If valid, accept the file
      } else {
          cb(new Error('Only images (jpeg, jpg, png) are allowed!')); // Reject invalid files
      }
  }
});



// Configure multer for video uploads (for wikis)
// Configure multer for video uploads (for wikis) and append timestamp to filename
const videoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'uploads/videos/';
    if (!fs.existsSync(uploadDir)){
        fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir); // Save videos to the 'uploads/videos/' directory
  },

  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname); // Get the file extension
    const baseName = path.basename(file.originalname, ext); // Get the base name without extension
    const timestamp = Date.now(); // Get the current timestamp
    cb(null, `${baseName}-${timestamp}${ext}`); // File name: originalName-timestamp.extension
  }
});

const uploadVideo = multer({
  storage: videoStorage,
  limits: { fileSize: 50 * 1024 * 1024 }, // Limit to 50MB for videos
  fileFilter: function (req, file, cb) {
    const filetypes = /mp4|mov|avi/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only videos (mp4, mov, avi) are allowed!'));
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

  function ensureAdminAccess(req, res, next) {
    if (req.user.access !== 2) {
      return res.status(403).json({ message: 'Access denied. You must be an admin.' });
    }
    next();
  }

// API to create a new wiki (admin only)
// API to create a new wiki (admin only)
app.post('/admin/create-wiki', 
  passport.authenticate('jwt', { session: false }), 
  ensureAdminAccess, 
  uploadVideo.single('video'), // Handling single video upload with field name 'video'
  async (req, res) => {

    const { title, plan_id } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'No video file uploaded' });
    }

    // The filename already includes the timestamp
    const videoUrl = `/uploads/videos/${req.file.filename}`;
    try {
      const client = await pool.connect();
      await client.query(
        'INSERT INTO wiki (plan_id, video_url, title, created_at, updated_at) VALUES ($1, $2, $3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)',
        [plan_id || 0, videoUrl, title]
      );
      client.release();

      return res.status(201).json({ message: 'Wiki created successfully', video_url: videoUrl });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to create wiki' });
    }
  }

);

// API to toggle coach status (admin only)
app.put('/admin/toggle-coach-status/:coachId', 
  passport.authenticate('jwt', { session: false }), 
  ensureAdminAccess, // Ensure the user is an admin
  async (req, res) => {
    const { coachId } = req.params;

    try {
      const client = await pool.connect();
      
      // Fetch the current status of the coach
      const coachResult = await client.query('SELECT status FROM coach_info WHERE coach_id = $1', [coachId]);

      if (coachResult.rows.length === 0) {
        client.release();
        return res.status(404).json({ message: 'Coach not found' });
      }

      // Get the current status of the coach
      const currentStatus = coachResult.rows[0].status;
      
      // Determine the new status: toggle between 'active' and 'inactive'
      const newStatus = currentStatus === 'active' ? 'inactive' : 'active';

      // Update the status in the database
      await client.query('UPDATE coach_info SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE coach_id = $2', [newStatus, coachId]);

      client.release();

      return res.json({ message: `Coach status updated to ${newStatus}` });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to update coach status' });
    }
  }
);


// API to create a new diet (admin only)
app.post('/admin/create-diet', passport.authenticate('jwt', { session: false }), ensureAdminAccess, async (req, res) => {
  const { diet_name, content } = req.body;

  if (!diet_name || !content) {
    return res.status(400).json({ message: 'Diet name and content are required.' });
  }

  try {
    const client = await pool.connect();
    await client.query(
      'INSERT INTO diets (diet_name, content) VALUES ($1, $2)',
      [diet_name, content]
    );
    client.release();

    return res.status(201).json({ message: 'Diet created successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to create diet' });
  }
});


// https://stackoverflow.com/questions/77816816/openai-assistants-api-how-to-get-response-from-the-v1-assistants-api-endpoint
app.post('/coach/gpt-conversation', 
  passport.authenticate('jwt', { session: false }), 
  ensureCoachAccess, 
  Gptupload.single('file'),  // Handling single file upload
  async (req, res) => {
    const file = req.file;  // The uploaded file

    try {
      const client = await pool.connect();

      // Check if the coach already has an assistant
      const checkAssistantQuery = `
        SELECT assist_id 
        FROM gpt_coach_assistant 
        WHERE coach_id = $1
      `;
      const checkResult = await client.query(checkAssistantQuery, [req.user.id]);

      if (checkResult.rows.length > 0 && checkResult.rows[0].assist_id) {
        // If assist_id exists, reject the request
        client.release();
        return res.status(400).json({
          error: "You already have an assistant. Please contact administrator to delete the existing one."
        });
      }

      // ---------------------------
      // Step 1: Create an assistant
      const myAssistant = await openai.beta.assistants.create({
        instructions:
          "analyze the attached file and try to learn my routine, those are my workout plans based on my experience and styles, learn how i give a workout plan to students, you must use this and follow the routines for future plans cause students will ask you to get plans based on their medical and training infos",
        name: `Workout Plans for coach with Id ${req.user.id}`,
        tools: [{ type: "file_search" }],
        model: "gpt-4o",
      });

      // Step 2: Upload the file to OpenAI
      const docs = await openai.files.create({
        file: fs.createReadStream(`uploads/gpt/docs/${file.filename}`),
        purpose: "assistants"
      });
      
      // Create vector store
      let vectorStore = await openai.beta.vectorStores.create({
        name: `Workout Plans for coach with Id ${req.user.id}`,
      });
      
      await openai.beta.vectorStores.files.createAndPoll(vectorStore.id, { file_id: docs.id });

      // Step 3: Link the vector store to the assistant
      await openai.beta.assistants.update(myAssistant.id, {
        tool_resources: { file_search: { vector_store_ids: [vectorStore.id] } },
      });

      // Insert the new assistant record into the database
      await client.query(
        'INSERT INTO gpt_coach_assistant (coach_id, assist_id) VALUES ($1, $2)',
        [req.user.id, myAssistant.id]
      );
      client.release();

      // Return success response
      return res.status(200).json({
        message: "Bot has trained successfully", 
        data: myAssistant
      });
      
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to handle GPT conversation' });
    }
});


app.post('/coach/set-plan-price', 
  passport.authenticate('jwt', { session: false }), 
  ensureCoachAccess, 
  async (req, res) => {
    const { level, price } = req.body;
    const coach_id = req.user.id; // Assuming coach is authenticated via JWT


    if (!level || !price) {
      return res.status(400).json({ message: 'Level and price are required.' });
    }

    try {
      const client = await pool.connect();
      const paypingApiInstance = new paypingApi.ProductApi();

      // Check if a record already exists for the given coach and level
      const checkQuery = 'SELECT * FROM coach_plans_prices WHERE coach_id = $1 AND level = $2';
      const result = await client.query(checkQuery, [coach_id, level]);

      let product_code;

      // If a record exists, update the product on PayPing and update the DB
      if (result.rows.length > 0) {
        product_code = result.rows[0].product_code;

        const optsUpdate = { 
          'model': new paypingApi.ProductEditViewModel({
            "title": `برنامه تمرینی`,
            "description": `پرداخت برنامه تمرینی در سطح ${level}`,
            "amount": price,
            "defineAmountByUser": false,
            "quantity": 1,
            "haveTax": true,
            "unlimited": false,
            "imageLink": ""
          })
        };

        // Update the product in PayPing
        paypingApiInstance.productEdit(optsUpdate, async function(error) {
          if (error) {
            console.error('Product update failed:', error);
            return res.status(500).json({ error: 'Failed to update product.' });
          } else {
            console.log('Product updated successfully.');

            // Update existing plan
            await client.query(
              'UPDATE coach_plans_prices SET price = $1, updated_at = CURRENT_TIMESTAMP WHERE coach_id = $2 AND level = $3',
              [price, coach_id, level]
            );
            client.release();

          }
        });
      } else {
        console.log("found no product");
        
        const axios = require('axios');
        let data = JSON.stringify({
          "title": `برنامه تمرینی ورزیک`,
          "description": `پرداخت برنامه تمرینی در سطح ${level}`,
          "amount": price,
          "defineAmountByUser": false,
          "quantity": 1,
          "haveTax": true,
          "unlimited": false,
          "imageLink": ""
        });

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://api.payping.ir/v1/product',
          headers: { 
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${paypingKey}`
          },
          data : data
        };

        axios.request(config)
        .then(async (response) => {
          console.log(JSON.stringify(response.data));
          product_code = response.data.code;
          let redirectUrl = "https://www.payping.ir/d/" + product_code;
          // Insert new plan
          await client.query(
            'INSERT INTO coach_plans_prices (coach_id, level, price, product_code, redirect_page) VALUES ($1, $2, $3, $4, $5)',
            [coach_id, level, price, product_code, redirectUrl]
          );
          client.release();
          return res.status(201).json({ message: 'Plan price and product set successfully.' });
        })
        .catch((error) => {
          console.log(error);
          return res.status(500).json({ error: 'Failed to create product.' });
        });
      }
      
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to set plan price.' });
    }
  }
);


// Helper function to create or update permalink
async function createPermalink(client, planData, coach_id, level, price, res) {
  try {
    const axios = require('axios');
    const product_code = planData.product_code;
    const price = planData.price;

    console.log("product code is : ",  product_code);

      let data = JSON.stringify({
        "amount": price,
        "returnUrl": `${callbackPayPingUrl}/user/get-coach-plan?coach_id=${coach_id}&level=${level}`,
        "payerIdentity": "",
        "payerName": "",
        "description": "",
        "clientRefId": ""
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.payping.ir/v2/pay',
        headers: { 
          'Content-Type': 'application/json',
           'Authorization': `Bearer ${paypingKey}`
        },
        data : data
      };

      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));

          let payCode = response.data.code;

          console.log("pay code is: ", payCode);

          let data = JSON.stringify({
            "code": payCode,
            "productCode": product_code,
            "redirectPage": `${callbackPayPingUrl}/user/get-coach-plan?coach_id=${coach_id}&level=${level}`,
            "getAddress": true,
            "mailerLiteListId": "",
            "smsText": "",
            "customDescriptionText": "",
            "emailOption": 0,
            "phoneOption": 0,
            "nameOption": 0,
            "customDesOption": 0,
            "clientId": "",
            "clientRefId": "",
            "permanentType": 0,
            "isMultiple": true
            });

          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.payping.ir/v1/permalink',
            headers: { 
              'Content-Type': 'application/json', 
              'Authorization': `Bearer ${paypingKey}`
            },
            data : data
          };

        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          let permalink_code = response.data.code;

            let config = {
              method: 'get',
              maxBodyLength: Infinity,
              url: `https://api.payping.ir/v1/permalink/${permalink_code}`,
              headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${paypingKey}`
              },
            };

          axios.request(config)
          .then((response) => async () => {
            console.log(JSON.stringify(response.data));
            let redirect_page = response.data.qrLink;
            

          })
          .catch((error) => {
            console.log(error);
            return res.status(500).json({ error: 'Failed to get permalink.' });
          });
          
        })
        .catch((error) => {
          console.log(error);
          return res.status(500).json({ error: 'Failed to create permalink.' });
        });

      })
      .catch((error) => {
        console.log(error);
        return res.status(500).json({ error: 'Failed to create a pay.' });
      });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to handle permalink creation.' });
  }
}


// API to fetch all coaches' plan prices based on the level (user access)
app.get('/user/coach-plans-prices', 
  passport.authenticate('jwt', { session: false }), 
  ensureUserAccess, 
  async (req, res) => {
    const { level } = req.query;  // Accept 'level' as a query parameter

    if (!level) {
      return res.status(400).json({ message: 'Level is required.' });
    }

    try {
      const client = await pool.connect();

      // Corrected query with proper column separation using commas
      const query = `
        SELECT cpp.coach_id, u.email as coach_email, cpp.level, cpp.price, 
               cpp.product_code, cpp.permalink_code, cpp.redirect_page
        FROM coach_plans_prices cpp
        JOIN users u ON cpp.coach_id = u.id
        WHERE cpp.level = $1
      `;

      const result = await client.query(query, [level]);

      client.release();

      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'No plans found for the specified level.' });
      }

      return res.json({ plans: result.rows });

    } catch (err) {
      console.error('Error fetching coach plans:', err);
      return res.status(500).json({ error: 'Failed to fetch coach plans.' });
    }
  }
);

app.post('/user/request-coach-plan', passport.authenticate('jwt', { session: false }), ensureUserAccess, async (req, res) => {

  const { coach_id, level } = req.body;
  const user_id = req.user.id;  // Assuming the user is authenticated
  
  if (!coach_id || !level) {
    return res.status(400).json({ message: 'Coach ID and level are required.' });
  }

  try{

    const client = await pool.connect();

    // Step 1: Check if the user already has an active plan with the coach
    const planResult = await client.query(
      'SELECT id, progress FROM users_plans WHERE user_id = $1 AND coach_id = $2 AND progress < 100',
      [user_id, coach_id]
    );

    if (planResult.rows.length > 0) {
      return res.status(400).json({ message: 'You already have an ongoing plan with this coach.' });
    }


    // Fetch workout info from users_workout_info table
    const workoutQuery = `
      SELECT weight, age, height, sex, goal, level
      FROM users_workout_info
      WHERE user_id = $1
    `;
    const workoutResult = await client.query(workoutQuery, [user_id]);

    if (workoutResult.rows.length === 0) {
      return res.status(400).json({ message: 'Workout information not found for the user.' });
    }

    // Extract workout info and validate non-empty fields
    const workoutInfo = workoutResult.rows[0];
    const { weight, age, height, sex, goal } = workoutInfo;

    if (!weight || !age || !height || !sex || !goal || !level) {
      return res.status(400).json({ message: 'Workout information contains empty fields.' });
    }

    // Fetch medical info from users_medical_records table
    const medicalQuery = `
      SELECT content
      FROM users_medical_records
      WHERE user_id = $1
    `;
    const medicalResult = await client.query(medicalQuery, [user_id]);

    if (medicalResult.rows.length === 0 || !medicalResult.rows[0].content) {
      return res.status(400).json({ message: 'Medical information is empty or missing.' });
    }

    // find if the coach id has registered a plan price with this level or not
    // if so then fetch the redirect page field
    const planPriceResult = await client.query(
      'SELECT * FROM coach_plans_prices WHERE level = $1 AND coach_id = $2',
      [level, coach_id]
    );

    if (planPriceResult.rows.length > 0) {
      let redirect_page = planPriceResult.rows[0].redirect_page;
      return res.status(200).json({ redirect_page: redirect_page});
    } else{
      return res.status(400).json({ message: 'Coach has not registered a plan with this level' });
    }
    
  } catch (err) {
    console.error('Error in requesting coach plan:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }

});


app.get('/user/get-coach-plan', passport.authenticate('jwt', { session: false }), ensureUserAccess, async (req, res) => {
  const { coach_id, level } = req.query;
  const user_id = req.user.id;  // Assuming the user is authenticated
  
  if (!coach_id || !level) {
    return res.status(400).json({ message: 'Coach ID and level are required.' });
  }

  try {
    const client = await pool.connect();

      // Fetch workout info from users_workout_info table
      const workoutQuery = `
      SELECT weight, age, height, sex, goal, level
      FROM users_workout_info
      WHERE user_id = $1
    `;
    const workoutResult = await client.query(workoutQuery, [user_id]);

    // Fetch medical info from users_medical_records table
    const medicalQuery = `
      SELECT content
      FROM users_medical_records
      WHERE user_id = $1
    `;
    const medicalResult = await client.query(medicalQuery, [user_id]);
 
    // Extracting workout info
    const workoutInfo = workoutResult.rows[0];
    const { weight, age, height, sex, goal, level } = workoutInfo;

    // Extracting medical info
    const medicalInfo = medicalResult.rows[0].content;

    let message = `من یک برنامه تمرینی بر اساس استایل این مربی میخواهم, اطلاعات من به صورت زیر میباشد: `;
      message += `وزن: ${weight} کیلوگرم, سن: ${age}, قد: ${height} سانتیمتر, جنسیت: ${sex === 'male' ? 'مرد' : 'زن'}, `;
      message += `هدف: ${goal}, سطح: ${level}. `;
      message += `سوابق پزشکی: ${medicalInfo}.`;

    // Step 2: Find the assistant for the given coach
    const assistResult = await client.query('SELECT assist_id FROM gpt_coach_assistant WHERE coach_id = $1', [coach_id]);

    if (assistResult.rows.length === 0) {
      return res.status(400).json({ message: 'Coach has not trained their bot yet.' });
    }

    const assist_id = assistResult.rows[0].assist_id;

    // Step 3: Check if the user already has an existing thread with the coach
    let thread_id;
    const threadResult = await client.query(
      'SELECT thread_id FROM gpt_users_plans WHERE user_id = $1 AND coach_id = $2',
      [user_id, coach_id]
    );

    if (threadResult.rows.length > 0) {
      thread_id = threadResult.rows[0].thread_id;
    } else {
      // Step 4: Create a new thread if no thread exists
      const thread = await openai.beta.threads.create({
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      });
      thread_id = thread.id;

      // Insert the new thread into the gpt_users_plans table
      await client.query(
        'INSERT INTO gpt_users_plans (user_id, coach_id, thread_id, message) VALUES ($1, $2, $3, $4)',
        [user_id, coach_id, thread_id, message]
      );
    }

    // Step 5: Create a new run for the existing or new thread
    const run = await openai.beta.threads.runs.create(
      thread_id,
      { assistant_id: assist_id }
    );

    const run_id = run.id;

    // Step 6: Store the run ID in the database
    await client.query(
      'UPDATE gpt_users_plans SET run_id = $1 WHERE user_id = $2 AND coach_id = $3',
      [run_id, user_id, coach_id]
    );

    // Step 7: Polling to check the thread run status
    const intervalTime = 5000; // Poll every 5 seconds
    const maxAttempts = 12; // Stop polling after 1 minute (12 * 5 seconds)
    let attempts = 0;

    const checkThreadStatus = async () => {
      try {
        const runResult = await openai.beta.threads.runs.retrieve(
          thread_id,
          run_id
        );

        if (runResult.status === 'completed') {
          // Step 8: Fetch the thread messages when the run is completed
          const threadMessages = await openai.beta.threads.messages.list(thread_id);
          const { data } = threadMessages.body;

          // Step 9: Find the message corresponding to this run
          const matchingMessage = data.find(message => message.run_id === run_id);

          if (matchingMessage) {
            // Step 10: Store the movement content into the 'movements' field in users_plans table
            const movementContent = matchingMessage.content.find(c => c.type === 'text').text.value;

            const insertPlanResult = await client.query(
              `INSERT INTO users_plans (user_id, coach_id, movements, requested_level, reg_at, updated_at) 
               VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) 
               RETURNING id, user_id, coach_id, movements, requested_level, reg_at, updated_at`,
              [user_id, coach_id, movementContent, level]
            );
            
            // Retrieve the inserted plan details
            const newPlan = insertPlanResult.rows[0];

            // Step 11: Store or update the users_coach table with this coach_id and user_id
            await client.query(
              'INSERT INTO users_coach (user_id, coach_id, choosed_at) VALUES ($1, $2, CURRENT_TIMESTAMP) ' +
              'ON CONFLICT (user_id, coach_id) DO UPDATE SET choosed_at = CURRENT_TIMESTAMP',
              [user_id, coach_id]
            );

            // Step 12: Respond to the client with the matched message data
            res.status(200).json({ message: 'Plan created', data: newPlan });
            clearInterval(polling); // Stop polling
          } else {
            res.status(404).json({ message: 'No matching message found for the run.' });
          }
        } else {
          console.log(`Run status: ${runResult.status}`);
        }

        attempts++;

        if (attempts >= maxAttempts) {
          clearInterval(polling); // Stop polling after max attempts
          res.status(408).json({ error: 'Timeout: The operation is taking longer than expected. Please try again later.' });
        }
      } catch (err) {
        console.error('Error checking thread status:', err);
        clearInterval(polling); // Stop polling in case of error
        res.status(500).json({ error: 'Failed to check thread status' });
      }
    };

    // Start polling
    const polling = setInterval(checkThreadStatus, intervalTime);

  } catch (err) {
    console.error('Error in requesting coach plan:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});



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

    // Query to join users_plans with any additional information if needed
    const query = `
      SELECT up.id as plan_id, up.movements, up.progress, up.reg_at, u.email as coach_email
      FROM users_plans up
      LEFT JOIN users u ON u.id = up.coach_id
      WHERE up.user_id = $1
    `;
    const result = await client.query(query, [req.user.id]);
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
      const coachId = 0; // This can be null for now or filled in if a coach assigns the diet later
  
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

    // Query to join users_diets and diets table with a type cast on the diet field
    const query = `
      SELECT ud.id as user_diet_id, ud.reg_at, d.*
      FROM users_diets ud
      JOIN diets d ON CAST(ud.diet AS INTEGER) = d.id
      WHERE ud.user_id = $1
    `;
    const result = await client.query(query, [req.user.id]);
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

    // Query to join users_coach with users and coach_info to fetch detailed coach information
    const query = `
      SELECT 
        uc.id as user_coach_id, 
        uc.choosed_at, 
        u.id as coach_id, 
        u.email, 
        u.phone,
        ci.info as coach_info  -- Fetch the coach info from coach_info table
      FROM users_coach uc
      JOIN users u ON uc.coach_id = u.id
      JOIN coach_info ci ON u.id = ci.coach_id  -- Join with the coach_info table to get additional info
      WHERE uc.user_id = $1
    `;
    const result = await client.query(query, [req.user.id]);
    client.release();

    // Respond with the coaches and their information
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

        // Generate a 4-digit OTP
        const otpCode = generateOTP();

        // Send the OTP via SMS
        smsir.SendVerifyCode(phone, 100000, [
          {
            "name": "Code",
            "value": otpCode
          }
        ]);
  
        const timestamp = Date.now();
        const redisKey = `${phone}:${timestamp}`;
        await redisClient.setEx(redisKey, 120, otpCode.toString());  // Ensure the value is a string // Store OTP for 2 minutes
        
        
        client.release();
        return res.json({ message: 'OTP code sent' });
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

        // Generate a 4-digit OTP
        const otpCode = generateOTP();

        // Send the OTP via SMS
        smsir.SendVerifyCode(phone, 100000, [
          {
            "name": "Code",
            "value": otpCode
          }
        ]);
  
        const timestamp = Date.now();
        const redisKey = `${phone}:${timestamp}`;
        await redisClient.setEx(redisKey, 120, otpCode.toString());  // Ensure the value is a string // Store OTP for 2 minutes

        client.release();
        return res.status(201).json({ message: 'OTP code sent' });
      }
  
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Login/Registration failed' });
    }
  });

  app.post('/validate-otp', async (req, res) => {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
      return res.status(400).json({ message: 'Phone and OTP are required.' });
    }

    try {
      // Fetch all keys matching the phone number
      const keys = await redisClient.keys(`${phone}:*`);
      
      // If no keys found (OTP expired)
      if (keys.length === 0) {
        return res.status(400).json({ message: 'OTP code has expired' });
      }

      // Get the latest OTP by selecting the last key (there may be multiple if using timestamps)
      const redisKey = keys[0]; // Assuming the first match is the valid OTP
      const storedOtp = await redisClient.get(redisKey);

      // Check if OTP matches
      if (storedOtp !== otp) {
        return res.status(400).json({ message: 'Invalid OTP code' });
      }

      // OTP is valid, fetch user from DB
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM users WHERE phone = $1', [phone]);

      if (result.rows.length === 0) {
        client.release();
        return res.status(404).json({ message: 'User not found' });
      }

      const user = result.rows[0];

      // Generate a JWT token for the user
      const token = jwt.sign({ id: user.id, access: user.access }, jwtSecret, { expiresIn: '30d' });

      client.release();
      
      // Return the JWT token in response
      return res.json({ message: 'OTP validated successfully', token: token });

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to validate OTP' });
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

    // Fetch user profile picture from users_pics table
    const profilePicResult = await client.query('SELECT pic_url FROM users_pics WHERE user_id = $1', [req.user.id]);
    const profilePic = profilePicResult.rows[0]?.pic_url || null; // Handle if no profile picture exists

    client.release();
    
    // Return combined user information including profile picture
    return res.json({
      message: 'Token is valid',
      user: {
        ...userInfo,
        workout_info: workoutInfo,
        medical_info: medicalInfo,
        profile_pic: profilePic // Add profile picture to the response
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
