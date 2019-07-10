var authController = require('../controllers/authcontroller.js');

module.exports = (app,passport) => {
    console.log('auth 2');

app.get('/signup', authController.signup);
app.get('/signin', authController.signin);
app.post('/signup', passport.authenticate('local-signup', {successRedirect: '/index',failureRedirect: '/signup',failureFlash: true}));
app.get('/index',isLoggedIn, authController.index);
app.get('/logout',authController.logout);
app.post('/signin', passport.authenticate('local-signin', {successRedirect: '/index',failureRedirect: '/signin',failureFlash: true}));
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/signin')}
};