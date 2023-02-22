const {Auth, Validate, promWithJsErr, fetchWithHTTPErr} = require('../utils');

const PATH = '';

function Couriers(options) {
  let aggOpts = options;
  if (
    Couriers._injectedOpts &&
    Object.keys(Couriers._injectedOpts).length > 0
  ) {
    aggOpts = Object.assign({}, options, Couriers._injectedOpts);
  }

  this.opts = aggOpts;
  this.API_ENDPOINT = this.opts.baseURL + PATH;
}

Couriers._injectedOpts = {};
Couriers._constructorWithOpts = function (options) {
  Couriers._injectedOpts = options;
  return Couriers;
}

Couriers.prototype.getCouriers = function(data) {
  return promWithJsErr((resolve, reject) => {
    const compulsoryFields = ['from_city', 'from_district', 'from_postalcode',
      'to_city', 'to_district', 'to_postalcode', 'weight', 'service_name', 'service_type'];

    if (!data.from_city) {
      compulsoryFields.push('example: Jakarta Selatan');
    }
    if (!data.from_district) {
      compulsoryFields.push('example: Mampang');
    }
    if (!data.from_postalcode) {
      compulsoryFields.push('example: 43123');
    }
    if (!data.to_city) {
      compulsoryFields.push('example: Jakarta Selatan');
    }
    if (!data.to_district) {
      compulsoryFields.push('example: Pasar Minggu');
    }
    if (!data.to_postalcode) {
      compulsoryFields.push('example: 43124');
    }
    if (!data.weight) {
      compulsoryFields.push('example: 250');
    }
    if (!data.service_name) {
      compulsoryFields.push('example: JNE REG');
    }
    if (!data.service_type) {
      compulsoryFields.push('example: pickup or dropoff');
    }
    Validate.rejectOnMissingFields(compulsoryFields, data, reject);

    fetchWithHTTPErr(`${this.API_ENDPOINT}/_partners/open-shipments/couriers?from_city=${data.from_city}&from_district=${data.from_district}&from_postalcode=${data.from_postalcode}&from_latitude=${data.from_latitude}&from_longitude=${data.from_longitude}&to_city=${data.to_city}&to_district=${data.to_district}&to_postalcode=${data.to_postalcode}&to_latitude=${data.to_latitude}&to_longitude=${data.to_longitude}&show_all=${data.show_all}&weight=${data.weight}&order_price=${data.order_price}&service_name=${data.service_name}&service_type=${data.service_type}`, {
      method: 'GET',
      headers: Auth.authWithBasicHeader(this.opts.accessToken, this.opts.userAgent, 'application/x-www-form-urlencoded'),
    })
      .then(resolve)
      .catch(reject);
  });
};

Couriers.prototype.getSettings = function(data) {
  return promWithJsErr((resolve, reject) => {
    const compulsoryFields = ['id'];
    if (!data.id) {
      compulsoryFields.push('example: Rocket Delivery');
    }
    Validate.rejectOnMissingFields(compulsoryFields, data, reject);

    fetchWithHTTPErr(`${this.API_ENDPOINT}/_partners/open-shipments/couriers/settings/${data.id}`, {
      method: 'GET',
      headers: Auth.authWithBasicHeader(this.opts.accessToken, this.opts.userAgent, 'application/json'),
    })
      .then(resolve)
      .catch(reject);
  });
}

module.exports = Couriers;