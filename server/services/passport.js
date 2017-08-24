const passport = require('passport'); // General passport code
const GoogleStrategy = require('passport-google-oauth20').Strategy; // Passport specific to Google
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // Model class

passport.serializeUser((user, done) => { // User model here same as user just saved; see below
    done(null, user.id); // No error  and logs user.id
})


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
                done(null, existingUser); // First argument is error object, since this is successful, null is passed as error. Second argument returns existing user
            }
            else {
                // we don't haev a user record with this ID, make a new record
                new User({ googleId: profile.id }) // Creates new instance of a user and 
                    .save() //.save to persist data to database from Express API
                    .then(user => done(null, user)) // Working with 2 separate instances of user, the first one being created and saved to mongoose and second instance 'user' may have additional changes while user was being saved. Always make use of the callback
            }
        })

})
); // Passport becoming aware of new strategy (Google). Creates instance of Google authentication
