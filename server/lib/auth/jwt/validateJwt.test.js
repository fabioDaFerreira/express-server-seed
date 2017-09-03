import { expect } from 'chai';
import { spy } from 'sinon';
import jwt from 'jsonwebtoken';

import validateJwt from './validateJwt';

const secret = 'secret';

const isAuthenticated = validateJwt(secret);
const token = jwt.sign('lorem ipsum', secret)

const resStub = { status: () => ({ send: () => { } }) };


describe('Validate JWT', function () {
    it('should return 401 if there is not a cookie', function () {
        var spyRes = spy(resStub, 'status');
        isAuthenticated({}, resStub, () => { });
        isAuthenticated({ cookies: null }, resStub, () => { });
        isAuthenticated({ cookies: null, headers: { authorization: null } }, resStub, () => { });
        expect(spyRes.callCount).to.be.equal(3);
        spyRes.restore();
    });

    it('should pass if there is a cookie', function () {
        var next = { next: () => { } }
        var spyNext = spy(next, 'next');
        isAuthenticated({ cookies: { token: 'lorem ipsum' }, headers: {} }, resStub, next.next);
        expect(spyNext.calledOnce).to.be.equal(true);
        spyNext.restore();
    });

});