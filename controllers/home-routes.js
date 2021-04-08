//Imports.
const router = require('express').Router();
const withAuth = require('../utils/auth');

// User login route
router.get('/signin', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signinorsignup', { new_user: false });
});

// Direct user to signup page when clicking signup link
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signinorsignup', { new_user: true });
});

//Dashboard route.
router.get("/dashboard", withAuth, async (req, res) =>
{
        res.render("dashboard", { loggedIn: true });
    
});

//Redirect to dash board on any other hit.
router.get("*", (req, res) =>
{
    res.redirect("/dashboard");
});

//Export router.
module.exports = router;