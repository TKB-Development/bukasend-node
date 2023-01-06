const Errors = require('./errors');
const { TokenService } = require('./authorization');
const { InfoAddressesService } = require('./coverage_area');
const { CouriersService } = require('./courir_configuration');
const { TransactionsService } = require('./report');

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
  this.InfoAddresses = InfoAddressesService._constructorWithOpts(this.opts);
  this.Couriers = CouriersService._constructorWithOpts(this.opts);
  this.Transactions = TransactionsService._constructorWithOpts(this.opts);
}

Bukasend.Errors = Errors;

module.exports = Bukasend;