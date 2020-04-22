var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('googleAuthenticated', {title: 'googleAuthenticated'});
});


module.exports = router;