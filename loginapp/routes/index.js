var express = require('express');
var router = express.Router();
var passport = require('passport');
// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});



// Facebook routes
router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {  
  successRedirect: '/profile',
  failureRedirect: '/',
}));

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}


module.exports = router;