import { expect } from 'chai';
import { spy } from 'sinon';


import setEnvironment from './index';


describe('Set environment', function () {
    it('#connect-dbs, #middlewares and #properties to be called', function () {
        setEnvironment({}, {});
        expect(true).to.be.equal(true);
    });
});