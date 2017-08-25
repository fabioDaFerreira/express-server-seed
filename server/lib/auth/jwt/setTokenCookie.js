import jwt from 'jsonwebtoken';

module.exports = (signToken, returnUrl) => {
    return (req, res) => {
        if (!req.user || !req.user.id) {
            return res.status(401).send();
        }
        const token = signToken(req.user.id);
        res.cookie('token', token);
        res.redirect(returnUrl)
    };
};