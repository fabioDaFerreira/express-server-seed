import { expect } from 'chai';
import { spy } from 'sinon';
import cors from './cors';

describe('Cors', function () {
    it('set two heades', function () {
        const resStub = {
            header: () => { }
        }
        var headersSpy = spy(resStub, 'header');

        cors(null,resStub,()=>{});

        expect(headersSpy.calledTwice).to.be.equal(true);
    });
});