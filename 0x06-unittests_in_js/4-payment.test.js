// 4. Stubs

const { expect } = require('chai');
const { it, describe } = require('mocha');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('', () => {
  it('checking if numbers round with spies and stubs', () => {
    const checkLog = sinon.spy(console, 'log');
    const stubBoy = sinon.stub(Utils, 'calculateNumber');
    stubBoy.withArgs('SUM', 100, 20).returns(120);
    sendPaymentRequestToApi(100, 20);
    expect(checkLog.calledOnce).to.be.true;
    expect(console.log('The total is: 120')).to.be.all;
    checkLog.restore();
    stubBoy.restore();
  });
});
