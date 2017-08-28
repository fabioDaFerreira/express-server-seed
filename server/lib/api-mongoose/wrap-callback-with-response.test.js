import { expect } from 'chai';
import { spy } from 'sinon';

import module from './wrap-callback-with-response';

var resStub = {
    json: () => { },
    status: () => ({ send: () => { } })
};

describe('Wrap Callback With Response', function () {
    it('should answer an error', function () {
        var spyStatus = spy(resStub, 'status')
        module(resStub)('error');
        expect(spyStatus.calledOnce).to.be.equal(true);
        spyStatus.restore();
    });

    it('should answer a json', function () {
        var spyStatus = spy(resStub, 'json')
        module(resStub)();
        expect(spyStatus.calledOnce).to.be.equal(true);
        spyStatus.restore();
    });
});