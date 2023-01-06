const {Auth, Validate, promWithJsErr, fetchWithHTTPErr} = require('../utils');

const PATH = '';

function Transactions(options) {
  let aggOpts = options;
  if (
    Transactions._injectedOpts &&
    Object.keys(Transactions._injectedOpts).length > 0
  ) {
    aggOpts = Object.assign({}, options, Transactions._injectedOpts);
  }

  this.opts = aggOpts;
  this.API_ENDPOINT = this.opts.baseURL + PATH;
}

Transactions._injectedOpts = {};
Transactions._constructorWithOpts = function (options) {
  Transactions._injectedOpts = options;
  return Transactions;
}

Transactions.prototype.getReports = function(data) {
  return promWithJsErr((resolve, reject) => {

    fetchWithHTTPErr(`${this.API_ENDPOINT}/_partners/open-shipments/transactions/reports`, {
      method: 'GET',
      headers: Auth.authWithBasicHeader(this.opts.accessToken, this.opts.userAgent, 'application/json'),
    })
      .then(resolve)
      .catch(reject);
  });
};

module.exports = Transactions;