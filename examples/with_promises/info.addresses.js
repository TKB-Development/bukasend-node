const bukasend = require('../bukasend')

const { InfoAddresses } = bukasend;
const infoAddresses = new InfoAddresses({});

infoAddresses.getAddresses()
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });

infoAddresses.getPostCode({
  'province': 'Bali',
  'city': 'Denpasar',
  'district': 'Denpasar Utara',
})
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });

infoAddresses.getSubdistricts({
  'province': 'Bali',
  'city': 'Denpasar',
  'district': 'Denpasar Utara',
})
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });