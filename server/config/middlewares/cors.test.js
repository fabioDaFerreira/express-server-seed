import { expect } from 'chai';
import { spy } from 'sinon';
import cors from './cors';

describe('Cors', function () {
    it('set two heades', function () {
        const resStub = {
            header: () => { },
            setHeader: () => { },
            end:()=>{}
        }
        var headersSpy = spy(resStub, 'setHeader');

        cors(null, resStub, () => { });
        cors({ method: "OPTIONS", headers: { origin: '*' } }, resStub, () => { });

        expect(headersSpy.called).to.be.equal(true);
    });
});