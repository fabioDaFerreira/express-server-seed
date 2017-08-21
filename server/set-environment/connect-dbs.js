import async from 'async';

module.exports = (dbs, cb) => {
    async.each(dbs, (driver, cb) => driver.connect(cb), cb || function (err) {
        console.log(err||'DBS connected');
    });
}