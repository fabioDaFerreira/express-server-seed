import { expect } from 'chai';
import { spy, mock } from 'sinon';

const resStub = {
    status: () => ({ send: () => { } }),
    cookie: () => null,
    redirect: () => null
};

const signTokenStub = () => "Token";
const returnUrl = 'http://localhost:3000';

import setTokenCookie from './setTokenCookie';
const route = setTokenCookie(signTokenStub, returnUrl);

describe('Set Token Cookie', function () {
    it('should fail if the user did not authenticate', function () {
        const responseSpy = spy(resStub, 'status');

        route({}, resStub);
        route({ user: {} }, resStub);
        route({ user: { id: 'id' } },resStub);

        expect(responseSpy.withArgs(401).calledTwice).to.be.equal(true);

        responseSpy.restore();
    });

    it('should set a token as cookie', function () {
        const responseMock = mock(resStub);

        responseMock.expects('cookie').once().withArgs('token', 'Token');
        responseMock.expects('redirect').once().withArgs(returnUrl);

        route({ user: { id: 'id' } }, resStub);

        responseMock.verify();
        responseMock.restore();
    });

});