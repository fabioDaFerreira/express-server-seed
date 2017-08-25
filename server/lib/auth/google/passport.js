import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

module.exports = (strategyConfig, callbackFn) => {
    passport.use(new GoogleStrategy(strategyConfig, callbackFn));
}