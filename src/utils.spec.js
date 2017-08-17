var expect=require('chai').expect;
var utils=require('../src/utils');

describe('Utils',function(){
    it('greeting should return "Hello <name>!"',function(){
        var message=utils.greeting('fabioDaFerreira');
        expect(message).to.be.equal('Hello fabioDaFerreira!');  
    });

    it('talk should return "message"',function(){
        var message = utils.talk('Fábio', 'How are you?');
        expect(message).to.be.equal('Fábio says: How are you?');
    });

    it('bye should return "Bye <name>!"',function(){
        var message=utils.bye('fabioDaFerreira');
        expect(message).to.be.equal(`Bye fabioDaFerreira!`);
    });

});