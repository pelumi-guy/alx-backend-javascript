// Hooks are useful functions that can be called before execute one or all tests in a suite
// Copy the code from 4-payment.js into a new file 5-payment.js: (same content/same behavior)

const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  console.log(`The total is: ${Utils.calculateNumber('SUM', totalAmount, totalShipping)}`);
};

module.exports = sendPaymentRequestToApi;
