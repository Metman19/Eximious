var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/contact', ensureAuthenticated, function(req, res){
	res.render('contact');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/contact');
	}
}

module.exports = router;