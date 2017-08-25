import jwt from 'jsonwebtoken';

module.exports = function (secretSession) {
    return id=>jwt.sign(id, secretSession);;
}
