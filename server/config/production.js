import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import morgan from 'morgan';
import errorHandler from 'errorhandler';
import mongoose from 'mongoose';

module.exports = {
    development:false,
    set: {
        'view engine': 'html',
        port: 8000
    },
    middlewares: [
        compression
        , cookieParser
        , () => bodyParser.urlencoded({ extended: false })
        , bodyParser.json
        , methodOverride
        , ()=>morgan(':status :method :url :remote-addr :remote-user [:date[clf]] :res[content-length] ":referrer" :response-time ms')
        , errorHandler
    ],
    dbs:[
    ]
};

