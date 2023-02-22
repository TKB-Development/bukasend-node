const {promWithJsErr, fetchWithHTTPErr} = require('../utils');

function Token(options) {
  let aggOpts = options;
  if (
    Token._injectedOpts &&
    Object.keys(Token._injectedOpts).length > 0
  ) {
    aggOpts = Object.assign({}, options, Token._injectedOpts);
  }

  this.opts = aggOpts;
}

Token._injectedOpts = {};
Token._constructorWithOpts = function (options) {
  Token._injectedOpts = options;
  return Token;
}

Token.prototype.getToken = function(data) {
  return promWithJsErr((resolve, reject) => {

    fetchWithHTTPErr(`${this.opts.baseAuthURL}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': this.opts.userAgent
        ,
      },
      body: new URLSearchParams({
        'grant_type': 'client_credentials',
        'client_id': this.opts.clientId,
        'client_secret': this.opts.clientSecret,
        'scope': 'public',
      })
    })
      .then(resolve)
      .catch(reject);
  });
};

module.exports = Token;