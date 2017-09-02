import { expect } from 'chai';
import { spy } from 'sinon';
import preUpdate from './pre-update';

describe('#preUpdate', function () {
    it('should update field dateModified', function () {
        var objStub = {
            preUpdate: preUpdate,
            update: () => { }
        };
        var spyUpdate = spy(objStub, 'update');
        objStub.preUpdate();
        expect(spyUpdate.called).to.be.equal(true);
        expect('dateModified' in spyUpdate.getCall(0).args[1].$set);
        spyUpdate.restore();
    });
});