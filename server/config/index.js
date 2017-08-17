import async from 'async';

var config;

config = process.env.NODE_ENV ? require('./' + process.env.NODE_ENV) : require('./development');

module.exports = (app) => {

    if (config) {
        Object.keys(config.set).forEach(key => app.set(key, config.set[key]));

        config.middlewares.forEach(fn => app.use(fn()));

        async.each(config.dbs,(driver,cb)=>driver.connect(cb),(err)=>console.log(err||'Dbs connected!'));
    }
};