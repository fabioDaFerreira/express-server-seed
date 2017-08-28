import { expect } from 'chai';
import { spy } from 'sinon';

import validateJwt from './validateJwt';

const isAuthenticated = validateJwt('secret');

describe('Validate JWT', function () {
    it('should return 401 if there is not a cookie', function () {
        var resStub = { status: () => ({ send: () => { } }) };
        var spyRes = spy(resStub, 'status');
        isAuthenticated({}, resStub, () => { });
        isAuthenticated({ cookies: null }, resStub, () => { });
        expect(spyRes.calledTwice).to.be.equal(true);
        spyRes.restore();
    });

    it('should pass if there is a cookie', function () {
        var next = { next: () => { } }
        var spyNext = spy(next, 'next');
        isAuthenticated({cookies:{token:'lorem ipsum'},headers:{}}, {}, next.next);
        expect(spyNext.calledOnce).to.be.equal(true);
        spyNext.restore();
    });
});