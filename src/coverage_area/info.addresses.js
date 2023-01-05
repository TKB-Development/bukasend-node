const {Auth, Validate, promWithJsErr, fetchWithHTTPErr} = require('../utils');

const PATH = '';

function InfoAddresses(options) {
  let aggOpts = options;
  if (
    InfoAddresses._injectedOpts &&
    Object.keys(InfoAddresses._injectedOpts).length > 0
  ) {
    aggOpts = Object.assign({}, options, InfoAddresses._injectedOpts);
  }

  this.opts = aggOpts;
  this.API_ENDPOINT = this.opts.baseURL + PATH;
}

InfoAddresses._injectedOpts = {};
InfoAddresses._constructorWithOpts = function (options) {
  InfoAddresses._injectedOpts = options;
  return InfoAddresses;
}

InfoAddresses.prototype.getAddresses = function(data) {
  return promWithJsErr((resolve, reject) => {

    fetchWithHTTPErr(`${this.API_ENDPOINT}/_partners/open-shipments/info/addresses`, {
      method: 'GET',
      headers: Auth.authWithBasicHeader(this.opts.accessToken, this.opts.userAgent, 'application/json'),
    })
      .then(resolve)
      .catch(reject);
  });
};

InfoAddresses.prototype.getPostCode = function(data) {
  return promWithJsErr((resolve, reject) => {
    const compulsoryFields = ['province', 'city', 'district'];
    if (!data.province) {
      compulsoryFields.push('example: Bali');
    }
    if (!data.city) {
      compulsoryFields.push('example: Denpasar');
    }
    if (!data.district) {
      compulsoryFields.push('example: Denpasar Utara');
    }
    Validate.rejectOnMissingFields(compulsoryFields, data, reject);

    fetchWithHTTPErr(`${this.API_ENDPOINT}/_partners/open-shipments/info/addresses/post-codes?province=${data.province}&city=${data.city}&district=${data.district}`, {
      method: 'GET',
      headers: Auth.authWithBasicHeader(this.opts.accessToken, this.opts.userAgent, 'application/json'),
    })
      .then(resolve)
      .catch(reject);
  });
}

InfoAddresses.prototype.getSubdistricts = function(data) {
  return promWithJsErr((resolve, reject) => {
    const compulsoryFields = ['province', 'city', 'district'];
    if (!data.province) {
      compulsoryFields.push('example: Bali');
    }
    if (!data.city) {
      compulsoryFields.push('example: Denpasar');
    }
    if (!data.district) {
      compulsoryFields.push('example: Denpasar Utara');
    }
    Validate.rejectOnMissingFields(compulsoryFields, data, reject);

    fetchWithHTTPErr(`${this.API_ENDPOINT}/_partners/open-shipments/info/addresses/subdistricts?province=${data.province}&city=${data.city}&district=${data.district}`, {
      method: 'GET',
      headers: Auth.authWithBasicHeader(this.opts.accessToken, this.opts.userAgent, 'application/json'),
    })
      .then(resolve)
      .catch(reject);
  });
}

module.exports = InfoAddresses;