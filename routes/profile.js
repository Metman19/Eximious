var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
    res.render('profile', {
        title: 'Profile',
        name: 'Giovanni'});
});

module.exports = router;
