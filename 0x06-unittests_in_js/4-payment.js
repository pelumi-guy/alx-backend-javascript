// Imagine that calling the function Utils.calculateNumber is actually calling an API or a very expensive method. You don’t necessarily want to do that on every test run
// Stub the function Utils.calculateNumber to always return the same number 10
// Verify that the stub is being called with type = SUM, a = 100, and b = 20
// Add a spy to verify that console.log is logging the correct message The total is: 10

const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  console.log(`The total is: ${Utils.calculateNumber('SUM', totalAmount, totalShipping)}`);
};

module.exports = sendPaymentRequestToApi;
