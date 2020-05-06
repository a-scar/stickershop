// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  userName: process.env.DB_USER,
  password: process.env.DB_PASSWORD
};