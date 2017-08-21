import { expect } from 'chai';

import configFactory from './index'

describe('Config', function () {
    it('should return default configuration', function () {
        const config = configFactory();
        config.dbs[0].connect(()=>{});
        expect(config.development).to.be.equal(true);
    });

    it('should return production configuration', function () {
        const config = configFactory('production');
        config.middlewares[2]();
        config.middlewares[5]();
        expect(config.development).to.be.equal(false);
    });

});