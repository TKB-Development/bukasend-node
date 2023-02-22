const Bukasend = require('../src/bukasend');
const dotenv = require('dotenv');

dotenv.config();

const bukasend = new Bukasend({
  clientId: process.env.BUKASEND_CLIENT_ID,
  clientSecret: process.env.BUKASEND_CLIENT_SECRET,
  userAgent: process.env.BUKASEND_USER_AGENT,
  accessToken: process.env.BUKASEND_ACCESS_TOKEN,
  baseURL: process.env.BUKASEND_BASE_URL,
  baseAuthURL: process.env.BUKASEND_BASE_AUTH_URL,
});

module.exports = bukasend;