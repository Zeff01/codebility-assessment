const mongoose = require('mongoose');
const dotenv = require('dotenv');
const DB = require('../enums/db.enums');

// Load env vars
dotenv.config();

// export db connection
module.exports = () => {
  mongoose
    .connect(`mongodb://${process.env.MONGODB_SERVER}?authSource=admin`)
    .then(() => console.log(DB.SUCCESS.DB_CONNECTED))
    .catch((err) => console.error(DB.ERROR.DB_NOT_CONNECTED, err));
};
