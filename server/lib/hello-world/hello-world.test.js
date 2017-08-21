import chai from 'chai';
import sinon from 'sinon';
import HelloWorld from './hello-world';
const expect = chai.expect;
const resStub = { json: (message) => message };
const spy = sinon.spy(resStub, 'json');

describe('HelloWorld webservice', () => {
    it('should return hello world', () => {
        HelloWorld(null, resStub);
        expect(spy.calledOnce).to.be.true;
        expect(spy.getCall(0).args[0]).to.be.equal('Hello world');
    });
});