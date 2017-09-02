import { expect } from 'chai';

import { addMiddleware, generateRouter } from './index'

describe('Express utils', function () {
    it('#addMiddleware', function () {
        var fn = () => { };
        var route1 = addMiddleware({}, fn);
        expect(route1.middlewares[0]).to.be.equal(fn);
        var route2 = addMiddleware({ middlewares: [] }, fn);
        expect(route2.middlewares[0]).to.be.equal(fn);
    });

    it('#generateRouter',function(){
        var router=generateRouter([{method:'get',url:'/',middlewares:[()=>{}],handler:()=>{}}]);
        expect(router.stack.length).to.be.equal(1);
        var router2=generateRouter([{method:'get',url:'/',handler:()=>{}}]);
        expect(router2.stack.length).to.be.equal(1);
        
    });


});