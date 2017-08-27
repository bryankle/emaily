const passport = require('passport'); // General passport code
const GoogleStrategy = require('passport-google-oauth20').Strategy; // Passport specific to Google
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // Model class

passport.serializeUser((user, done) => { // User model here same as user just saved; see below
    done(null, user.id); // No error  and logs user.id
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => {
            done(null, user)
        })
})


passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback', // User returning from Google,
        proxy:true
    }, 
    async (accessToken, refreshToken, profile, done) => {
    // console.log('accessToken', accessToken);
    // console.log('refresh token', refreshToken);
    // console.log('profile:', profile);
    const existingUser = await User.findOne({ googleId: profile.id })
            if (existingUser) {
                return done(null, existingUser); // First argument is error object, since this is successful, null is passed as error. Second argument returns existing user
            }
            const user = await new User({ googleId: profile.id }).save() //Promise 2; .save to persist data to database from Express API
            done(null, user);
        }
    )
); // Passport becoming aware of new strategy (Google). Creates instance of Google authentication
