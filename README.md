


# Dev Setup 

import the `db.sql` into `varzik` database.

```bash
cd payping && sudo npm install && sudo npm link
cd .. && sudo npm link varzikpayping
sudo npm install && node index.js
```

# Production

```bash
sudo chmod +x setup.sh
npm install -g pm2 && sudo pm2 start --name back run.sh
```