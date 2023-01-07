const bukasend = require('../bukasend')

const { Transactions } = bukasend;
const transactions = new Transactions({});

transactions.createTransaction({
    partner_transaction_id: "TRX-12345",
    order_name: "Kemeja Biru Navy",
    order_total: 2,
    order_price: 150000,
    weight: 500,
    height: 10,
    width: 20,
    length: 30,
    notes: "Ukuran XL",
    from: {
      name: "Bambang Brotoseno",
      title: "Brotoseno Banyumanik",
      phone: "081234567890",
      email: "user@email.com",
      address: "Jl Merbabu No 123",
      area: "Banyumanik",
      city: "Semarang",
      province: "Jawa Tengah",
      post_code: "50267",
      latitude: 6.2735336,
      longitude: 106.8237489
    },
    to: {
      name: "Jhon Doe Bamb",
      title: "Jhon Doe",
      phone: "081234567890",
      email: "jhon@doe.com",
      address: "Jl. Kemang Raya, No. 88",
      area: "Mampang Prapatan",
      city: "Jakarta Selatan",
      province: "DKI Jakarta",
      post_code: "12730",
      latitude: 6.2702479,
      longitude: 106.812886
    },
    courier: "J&T REG",
    courier_service_type: "pickup"
  }
)
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });

transactions.createBookingCode({
  transaction_id: "TRX-12345",
  }
)
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });

transactions.cancelTransaction({
  id: "TRX-12345"
})
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });

transactions.getReports()
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });