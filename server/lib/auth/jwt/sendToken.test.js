import { spy } from 'sinon';
import { expect } from 'chai';

import sendToken from './sendToken';

var reqStub = {
    cookies:{
        token:'token'
    }
};

var resStub = {
    send: () => { }
};

describe('#sendToken', () => {
    it('should return a token', () => {
        var spySend = spy(resStub, 'send');
        sendToken(reqStub, resStub);
        expect(spySend.called).to.be.equal(true);
        expect(spySend.getCall(0).args[0]).to.be.equal('token');
    });
});