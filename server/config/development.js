import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import morgan from 'morgan';
import errorHandler from 'errorhandler';
import mongoose from 'mongoose';
import mongostring from '../../secrets/mongolabstring';
import cors from './middlewares/cors';
import googleAuthentication from './googleAuthentication';
import session from 'express-session';
import connectMongo from 'connect-mongo';

const MongoStore = connectMongo(session);
const secretSession = 'fabioDaFerreira';

module.exports = {
    development: true,
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
        , () => morgan(':status :method :url :remote-addr :remote-user [:date[clf]] :res[content-length] ":referrer" :response-time ms')
        , () => cors
        , errorHandler
        , () => session({
            secret: secretSession
            , saveUninitialized: true
            , resave: false
            , store: new MongoStore({
                mongooseConnection: mongoose.connection
            })
        })
    ],
    dbs: [
        {
            connect: cb => mongoose.connect(mongostring, cb)
        }
    ],
    auth: {
        clientID: '209080652014-rkieb9e2p7lssr6r6t0dc4marl240cfv.apps.googleusercontent.com',
        clientSecret: 'j0dQyxbewXxFkqO9begyDkYA',
        sessionSecret: secretSession,
        callbackURL: 'http://localhost:8000/auth/google/callback',
        redirectUrl: 'http://localhost:4200/backoffice',
        failureRedirect: 'http://localhost:4200',
        callback: googleAuthentication(['martinhoferreira10@gmail.com'])
    }
};

