import { expect } from 'chai';
import { stub } from 'sinon';

import connectDbs from './connect-dbs';

describe('Connect-DBS', () => {
    it('should call callback with none dbs', () => {
        const cb = stub();
        connectDbs(null, cb);
        expect(cb.calledOnce).to.be.equal(true);
    });

    it('should call callback with empty array of dbs', () => {
        const cb = stub();
        connectDbs([], cb);
        expect(cb.calledOnce).to.be.equal(true);
    });

    it('should call callback with array of dbs', () => {
        const cb = stub();
        connectDbs([{
            connect: (cb) => cb()
        }], cb);
        expect(cb.calledOnce).to.be.equal(true);
    });

    it('should connect dbs without callback', () => {
        connectDbs([{
            connect: (cb) => cb()
        }]);
        expect(true).to.be.equal(true);
    });
});