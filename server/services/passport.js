const passport = require('passport'); // General passport code
const GoogleStrategy = require('passport-google-oauth20').Strategy; // Passport specific to Google
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // Model class

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback' // User returning from Google
}, (accessToken, refreshToken, profile, done) => {
    // console.log('accessToken', accessToken);
    // console.log('refresh token', refreshToken);
    // console.log('profile:', profile);
    User.findOne({ googleId: profile.id })
        .then((existingUser) => {
            if (existingUser) {
                // we already have a record with the given profile ID
                
            }
            else {
                // we don't haev a user record with this ID, make a new record
                new User({ googleId: profile.id }).save(); // Creates new instance of a user and .save to persist data to database from Express API
            }
        })

})
); // Passport becoming aware of new strategy (Google). Creates instance of Google authentication
