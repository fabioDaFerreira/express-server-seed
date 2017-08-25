import passport from 'passport';

module.exports = function (failureRedirect) {
    return passport.authenticate('google', {
        failureRedirect: failureRedirect,
        scope:['email'],
        session: false
    });
};