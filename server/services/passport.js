const passport = require('passport'); // General passport code
const GoogleStrategy = require('passport-google-oauth20').Strategy; // Passport specific to Google
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback' // User returning from Google
}, (accessToken, refreshToken, profile, done) => {
    // console.log('accessToken', accessToken);
    // console.log('refresh token', refreshToken);
    // console.log('profile:', profile);
    
})
); // Passport becoming aware of new strategy (Google). Creates instance of Google authentication
