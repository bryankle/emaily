const passport = require('passport');

module.exports = (app) => {

    app.get(
        '/auth/google', 
        passport.authenticate('google', { // GoogleStrategy is internally known as 'google', therefore passport will know to refer to GoogleStrategy when the string 'google' is applied
            scope: ['profile', 'email'] // Specifies to Google server what access we are requesting 
        })
    )
    
    app.get('/auth/google/callback', passport.authenticate('google')) // Route after user authenticates with Google OAuth

    app.get('/api/logout', (req, res) => { // Whenever user makes a request to this directory, log user out
        req.logout(); // logout is a function automatically attached to the req object by passport. When called, ogout takes cookie that contains our user ID and kills it
        res.send(req.user); // Proves to user they are not signed in; returns 'nothing' or undefined
    })

    app.get('/api/current_user', (req, res) => { // When someone makes a request to application, req is incoming, res is outgoing. Veifies someone who has already gone through  OAuth flow can now access user
        res.send(req.user);
    });
};
