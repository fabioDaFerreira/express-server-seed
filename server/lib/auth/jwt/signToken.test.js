import { expect } from 'chai';
import signToken from './signToken';

describe('SignToken', function () {
    it('returns a function wich generates a token',function(){
        const generateToken = signToken('secret');
        expect(generateToken instanceof Function).to.be.equal(true,'Sign token returns a function');
        const token=generateToken('id');
        expect(typeof(token)==='string').to.be.equal(true,'token is a string');
    });
});