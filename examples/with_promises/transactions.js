const bukasend = require('../bukasend')

const { Transactions } = bukasend;
const transactions = new Transactions({});

transactions.getReports()
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });