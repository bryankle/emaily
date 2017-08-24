const passport = require('passport');

module.exports = (app) => {

    app.get(
        '/auth/google', 
        passport.authenticate('google', { // GoogleStrategy is internally known as 'google', therefore passport will know to refer to GoogleStrategy when the string 'google' is applied
            scope: ['profile', 'email'] // Specifies to Google server what access we are requesting 
        })
    )
    
    app.get('/auth/google/callback', passport.authenticate('google')) // Route after user authenticates with Google OAuth

    app.get('/api/current_user', (req, res) => { // When someone makes a request to application, req is incoming, res is outgoing. Veifies someone who has already gone through  OAuth flow can now access user
        res.send(req.user);
    });
};
