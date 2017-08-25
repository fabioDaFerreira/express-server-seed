import googleAuthenticate from './google/authenticate';
import setTokenCookie from './jwt/setTokenCookie';
import signToken from './jwt/signToken';

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
        }
    ]
};