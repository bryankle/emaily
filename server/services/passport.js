passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback' // User returning from Google
}, (accessToken, refreshToken, profile, done) => {
    console.log('accessToken', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile:', profile);
    
})
); // Passport becoming aware of new strategy (Google). Creates instance of Google authentication
