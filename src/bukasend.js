const Errors = require('./errors');
const { TokenService } = require('./authorization');

function Bukasend(options) {
  let {
    clientId,
    clientSecret,
    userAgent,
    accessToken,
    baseURL,
    baseAuthURL,
  } = options;

  // default values of opts
  baseURL = baseURL || 'https://api.bukalapak.com';
  baseAuthURL = baseAuthURL || 'https://accounts.bukalapak.com';

  this.opts = { clientId, clientSecret, userAgent, accessToken, baseURL, baseAuthURL };

  this.Token = TokenService._constructorWithOpts(this.opts);
}

Bukasend.Errors = Errors;

module.exports = Bukasend;