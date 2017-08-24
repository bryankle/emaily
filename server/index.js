const express = require('express'); // Common JS convention for back end; different from ES6 'require' in front end
const mongoose = require('mongoose'); 
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys'); // Importing keys from config
require('./models/User');
require('./services/passport'); // Condensed because we do not require anything specific and only need for the file to run

mongoose.connect(keys.mongoURI) // Mongo username and password stored in config directory

const app = express(); // Generates single Express application; most applications will contain 1 application, some can contain more. App listens to incoming requests that are being routed to expres side from node side

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)// Communicate to express to utilize cookies in application
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app); // Requires and returns a function, invokes app into function



const PORT = process.env.PORT || 5000; // Use Heroku assigned port for production and port 5000 for development
app.listen(process.env.PORT || 5000);