import googleAuthenticate from './google/authenticate';
import setTokenCookie from './jwt/setTokenCookie';
import signToken from './jwt/signToken';
import sendToken from './jwt/sendToken';
import validateJwt from './jwt/validateJwt';


module.exports = (config) => {
    require('./google/passport')({
        clientID: config.clientID,
        clientSecret: config.clientSecret,
        callbackURL: config.callbackURL
    }, config.callback);

    return [
        {
            method: 'GET',
            url: '/google',
            middlewares: [googleAuthenticate(config.failureRedirect)]
        },
        {
            method: 'GET',
            url: '/google/callback',
            middlewares: [googleAuthenticate(config.failureRedirect)],
            handler: setTokenCookie(signToken(config.sessionSecret), config.redirectUrl)
        },
        {
            method: 'GET',
            url: '/token',
            middlewares: [validateJwt(config.sessionSecret)],
            handler: sendToken
        }
    ]
};