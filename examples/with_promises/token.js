const bukasend = require('../bukasend')

const { Token } = bukasend;
const token = new Token({});

token.getToken()
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });