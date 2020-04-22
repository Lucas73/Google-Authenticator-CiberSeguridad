var express = require('express');
var router = express.Router();
const axios = require('axios');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    res.redirect('/login?rEmail='+req.body.rEmail+'&rPassword='+req.body.rPassword);
});



module.exports = router;
