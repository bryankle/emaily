const express = require('express'); // Common JS convention for back end; different from ES6 'require' in front end
const passport = require('passport'); // General passport code
const GoogleStrategy = require('passport-google-oauth20').Strategy; // Passport specific to Google
const keys = require('./config/keys');


const app = express(); // Generates single Express application; most applications will contain 1 application, some can contain more. App listens to incoming requests that are being routed to expres side from node side


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback' // User returning from Google
}, (accessToken) => {
    console.log(accessToken);
})
); // Passport becoming aware of new strategy (Google). Creates instance of Google authentication

const PORT = process.env.PORT || 5000; // Use Heroku assigned port for production and port 5000 for development
app.listen(process.env.PORT || 5000);