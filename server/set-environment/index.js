import connectDbs from './connect-dbs';
import middlewares from './middlewares';
import properties from './properties';

module.exports = (app, config, cb) => {
    properties(app, config.set);
    middlewares(app, config.middlewares);
    connectDbs(app.dbs||[],cb);
};