import expect from 'chai';
import { mock } from 'sinon';

import handlers from './api-mongoose.handlers';

var modelStub = {
    find: (query, cb) => cb(),
    findById: (id, cb) => cb(),
    update: (query, update, cb) => cb(),
    remove: (query, cb) => cb(),
    create: (object, cb) => cb()
},
    resStub = {
        json: () => { },
        status: () => ({ send: () => { } })
    },
    mockModel;

describe('Api Mongoose Handlers', function () {

    beforeEach(() => mockModel = mock(modelStub));

    afterEach(() => mockModel.restore());

    it('#find', function () {
        mockModel.expects('find').once();

        handlers.find(modelStub)({}, resStub);

        mockModel.verify();
    });

    it('#findById', function () {
        mockModel.expects('findById').once();

        handlers.findById(modelStub)({ params: { id: 1 } }, resStub);

        mockModel.verify();
    });

    it('#create', function () {

        var obj = {
            teste: 1
        };

        mockModel.expects('create').once().withArgs(obj);


        handlers.create(modelStub)({body:obj}, resStub);

        mockModel.verify();
    });

    it('#updateById', function () {
        mockModel.expects('update').once();

        handlers.updateById(modelStub)({ params: { id: 1 } }, resStub);

        mockModel.verify();
    });

    it('#deleteById', function () {
        mockModel.expects('remove').once();

        handlers.deleteById(modelStub)({ params: { id: 1 } }, resStub);

        mockModel.verify();
    });
});