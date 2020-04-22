var express = require('express');
var router = express.Router();
const axios = require('axios');
rLogin = require('./index')

router.get('/', function(req, res, next) {
  res.render('login', { rEmail: req.query.rEmail, rPassword: req.query.rPassword });
});

router.post('/', function(req, res, next) {
  axios.get('https://www.authenticatorApi.com/Validate.aspx?Pin='+req.body.googleCode+'&SecretCode=12345678BXYT')
  .then(response => {
    console.log(response.data, '<--- response.data')
    if(req.body.email ="lucas@lucas.com" && req.body.password == "qw1234" && response.data=="True"){
      res.redirect('./authenticated');
    }else{
      res.render('googleNoAuthenticated', {title: 'NoAuth'});
    }
  })
  .catch(error => {
    console.log(error);
  });
});



module.exports = router;
