// 8. Basic Integration testing

const request = require('request');
const { expect } = require('chai');

describe('Payment System API', () => {
  const baseUrl = 'http://localhost:7865';
  const num = Math.ceil(Math.random() * 100);

   // Test for correct status code
   it('Should return status code 200', (done) => {
    request.get(baseUrl, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // Test for correct result
  it('Should return "Welcome to the payment system"', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Test for correct correct status code when :id is a number
  it('Should test for correct status code when :id is a number', (done) => {
    request.get(baseUrl + `/cart/${num}`, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // Test for correct correct status code when :id is NOT a number (=> 404)
  it('Should test for correct status code when :id is not a number', (done) => {
    request.get(baseUrl + '/cart/notanumber', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  // Additional test cases
  it('Should have specific headers', (done) => {
    request.get(baseUrl, (error, response) => {
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });

  it('Should handle non-existent routes', (done) => {
    request.get(baseUrl + '/nonexistent', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
