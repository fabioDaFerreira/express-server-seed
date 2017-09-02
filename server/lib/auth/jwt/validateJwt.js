var expressJwt = require('express-jwt');

module.exports = function (secretSession) {
    var validateJwt = expressJwt({ secret: secretSession });

    return function (req, res, next) {
        if (req.cookies && req.cookies.token) {
            req.headers.authorization = 'Bearer ' + req.cookies.token;
        }
        else {
            return res.status(401).send('Unauthorized');
        }


        validateJwt(req, res, next);
    };

}