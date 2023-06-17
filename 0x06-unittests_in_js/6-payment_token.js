// Create a new function named getPaymentTokenFromAPI
// The function will take an argument called success (boolean)
// When success is true, it should return a resolved promise with the object {data: 'Successful response from the API' }
// Otherwise, the function is doing nothing.

const getPaymentTokenFromAPI = (success) => {
    return new Promise(function (resolve) {
      if (success) {
        resolve({ data: 'Successful response from the API' });
      }
    });
};

module.exports = getPaymentTokenFromAPI;
