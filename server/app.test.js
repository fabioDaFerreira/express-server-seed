import { expect } from 'chai';
import { spy } from 'sinon';

import app from './app';

import { appStub } from './test/globals.test';

describe('App', function () {
    it('#listen should be called once', () => {
        const listenSpy = spy(appStub, 'listen');
        app(appStub, {}, () => { },()=>{});;
        expect(listenSpy.calledOnce).to.be.equal(true);
        expect(listenSpy.calledTwice).to.be.equal(false);
    });
});