import { expect } from 'chai';
import index from './index';

const googleAuthentication = index(['a@mail.com']);

describe('Google Authentication', function () {
    it('should return 403 if email is not authorized', function (done) {
        googleAuthentication(null, null, { emails: [{ value: 'b@mail.com' }] }, function (err, val) {
            expect(err).to.be.equal(403);
            done();
        });
    });

    it('should return profile if email is authorized', function (done) {
        googleAuthentication(null, null, { id: 1, emails: [{ value: 'a@mail.com' }] }, function (err, val) {
            expect(err).to.be.equal(null);
            expect(val.id).to.be.equal(1);
            done();
        });
    });
});