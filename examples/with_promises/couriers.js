const bukasend = require('../bukasend')

const { Couriers } = bukasend;
const couriers = new Couriers({});

couriers.getCouriers({
  'from_city': 'Jakarta Selatan',
  'from_district': 'Mampang',
  'from_postalcode': '43123',
  'from_latitude': -6.2502846,
  'from_longitude': 106.8045058,
  'to_city': 'Jakarta Selatan',
  'to_district': 'Pasar Minggu',
  'to_postalcode': '43124',
  'to_latitude': -6.2898145,
  'to_longitude': 106.8052573,
  'show_all': false,
  'weight': 250,
  'order_price': 10000,
  'service_name': 'JNE REG',
  'service_type': 'pickup',
})
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });

couriers.getSettings({
  'id': 'GrabExpress'
})
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });