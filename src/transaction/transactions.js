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

Transactions.prototype.createTransaction = function(data) {
  return promWithJsErr((resolve, reject) => {
    const compulsoryFields = ['partner_transaction_id', 'order_name', 'order_total', 'order_price', 'weight', 'courier', 'courier_service_type'];
    if (!data.partner_transaction_id) {
      compulsoryFields.push('example: TRX-001');
    }
    if (!data.order_name) {
      compulsoryFields.push('example: Document');
    }
    if (!data.order_total) {
      compulsoryFields.push('example: 1');
    }
    if (!data.order_price) {
      compulsoryFields.push('example: 100000');
    }
    if (!data.weight) {
      compulsoryFields.push('example: 500');
    }
    if (!data.from.name) {
      compulsoryFields.push('example: John Doe');
    }
    if (!data.from.phone) {
      compulsoryFields.push('example: +628123123123');
    }
    if (!data.from.address) {
      compulsoryFields.push('example: Jl. Kemang Raya, No. 88');
    }
    if (!data.from.area) {
      compulsoryFields.push('example: Mampang Prapatan');
    }
    if (!data.from.city) {
      compulsoryFields.push('example: Jakarta Selatan');
    }
    if (!data.from.province) {
      compulsoryFields.push('example: DKI Jakarta');
    }
    if (!data.from.post_code) {
      compulsoryFields.push('example: 12730');
    }
    if (!data.to.name) {
      compulsoryFields.push('example: John Doe');
    }
    if (!data.to.phone) {
      compulsoryFields.push('example: +628123123123');
    }
    if (!data.to.address) {
      compulsoryFields.push('example: Jl. Kemang Raya, No. 88');
    }
    if (!data.to.area) {
      compulsoryFields.push('example: Mampang Prapatan');
    }
    if (!data.to.city) {
      compulsoryFields.push('example: Jakarta Selatan');
    }
    if (!data.to.province) {
      compulsoryFields.push('example: DKI Jakarta');
    }
    if (!data.courier) {
      compulsoryFields.push('example: J&T REG');
    }
    if (!data.courier_service_type) {
      compulsoryFields.push('example: pickup or dropoff');
    }
    Validate.rejectOnMissingFields(compulsoryFields, data, reject);

    fetchWithHTTPErr(`${this.API_ENDPOINT}/_partners/open-shipments/transactions`, {
      method: 'POST',
      headers: Auth.authWithBasicHeader(this.opts.accessToken, this.opts.userAgent, 'application/json'),
      body: JSON.stringify({
        partner_transaction_id: data.partner_transaction_id,
        order_name: data.order_name,
        order_total: data.order_total,
        order_price: data.order_price,
        weight: data.weight,
        height: data.height,
        width: data.width,
        length: data.length,
        notes: data.notes,
        from: {
          name: data.from.name,
          title: data.from.title,
          phone: data.from.phone,
          email: data.from.email,
          address: data.from.address,
          area: data.from.area,
          city: data.from.city,
          province: data.from.province,
          post_code: data.from.post_code,
          latitude: data.from.latitude,
          longitude: data.from.longitude,
        },
        to: {
          name: data.to.name,
          title: data.to.title,
          phone: data.to.phone,
          email: data.to.email,
          address: data.to.address,
          area: data.to.area,
          city: data.to.city,
          province: data.to.province,
          post_code: data.to.post_code,
          latitude: data.to.latitude,
          longitude: data.to.longitude,
        },
        original_sender: data.courier,
        courier: data.courier,
        courier_service_type: data.courier_service_type,
        pickup_request_time: data.pickup_request_time,
        delivery_insurance_type: data.delivery_insurance_type,
        cod: data.cod,
        total_cod_price: data.total_cod_price,
        admin_fee_paid_by: data.admin_fee_paid_by,
      })
    })
      .then(resolve)
      .catch(reject);
  });
};

Transactions.prototype.createBookingCode = function(data) {
  return promWithJsErr((resolve, reject) => {
    const compulsoryFields = ['transaction_id'];
    if (!data.transaction_id) {
      compulsoryFields.push('example: TRX-12345');
    }
    Validate.rejectOnMissingFields(compulsoryFields, data, reject);

    fetchWithHTTPErr(`${this.API_ENDPOINT}/_partners/open-shipments/transactions/generate-booking-code`, {
      method: 'POST',
      headers: Auth.authWithBasicHeader(this.opts.accessToken, this.opts.userAgent, 'application/json'),
      body: JSON.stringify({
        transaction_id: data.transaction_id,
      })
    })
      .then(resolve)
      .catch(reject);
  });
};

Transactions.prototype.cancelTransaction = function(data) {
  return promWithJsErr((resolve, reject) => {
    const compulsoryFields = ['id'];
    if (!data.id) {
      compulsoryFields.push('example: 12345');
    }
    Validate.rejectOnMissingFields(compulsoryFields, data, reject);

    fetchWithHTTPErr(`${this.API_ENDPOINT}/_partners/open-shipments/transactions/${data.id}/cancellations`, {
      method: 'PATCH',
      headers: Auth.authWithBasicHeader(this.opts.accessToken, this.opts.userAgent, 'application/json'),
    })
      .then(resolve)
      .catch(reject);
  });
};

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