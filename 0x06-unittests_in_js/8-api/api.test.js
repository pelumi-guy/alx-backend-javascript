// 8. Basic Integration testing

const request = require('request');
const { expect } = require('chai');

describe('Payment System API', () => {
  const baseUrl = 'http://localhost:7865';

  // Test for correct status code
  it('should return status code 200', (done) => {
    request.get(baseUrl, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // Test for correct result
  it('should return "Welcome to the payment system"', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Additional test cases
  it('should have specific headers', (done) => {
    request.get(baseUrl, (error, response) => {
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });

  it('should handle non-existent routes', (done) => {
    request.get(baseUrl + '/nonexistent', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
