module.exports = emailsAutorized =>
    (accessToken, refreshToken, profile, done) => {
        if (profile.emails.map(email => email.value).find(email => emailsAutorized.indexOf(email) >= 0)) {
            return done(null, profile);
        }
        return done(403);
    }