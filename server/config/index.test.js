import { expect } from 'chai';

import configFactory from './index'

describe('Config', function () {
    it('should return default configuration', function () {
        const config = configFactory();
        config.dbs[0].connect((err,con) => { console.log(err||con) });
        for (var i = 0; i < config.middlewares.length; i++) {
            config.middlewares[i]();
        }
        expect(config.development).to.be.equal(true);
    });

    it('should return production configuration', function () {
        const config = configFactory('production');
        for (var i = 0; i < config.middlewares.length; i++) {
            config.middlewares[i]();
        }
        expect(config.development).to.be.equal(false);
    });

});