import { expect } from 'chai';
import { mock } from 'sinon';

import apiMongooseRoutes from './api-mongoose.routes';

var appStub = {
    get: () => { },
    put: () => { },
    post: () => { },
    delete: () => { }
},
    modelStub = {
        collection: {
            collectionName: 'models'
        }
    },
    mockApp;

describe('Api Mongoose Routes', function () {

    it('should return null if it is not passed a model',function(){
        expect(apiMongooseRoutes()).to.be.equal(null);
    })

    it('should return every routes', function () {
        var routes = apiMongooseRoutes(modelStub);

        function hasRoutes(routes) {
            return function (route) {
                var routeFound = routes.find((r) => r.method === route[0] && r.url === route[1]);

                expect(routeFound).to.be.not.equal(undefined, `${route[0]}:${route[1]} does not exists`);
                expect(routeFound.handler).to.be.not.equal(undefined,`${route[0]}:${route[1]} has not handler`);
            }
        }
        [
            ['get', '/'],
            ['get', '/:id'],
            ['post', '/'],
            ['put', '/:id'],
            ['delete', '/:id']
        ].forEach(hasRoutes(routes));

    });
});

