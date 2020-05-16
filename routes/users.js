var express = require('express');
var router = express.Router();
var login = require('../controller/authenticate/login.js');

router.post('/login',function (req,res,next){

  const username =  req.body.username;
  var loginResult = login(username, req.body.password);
  if(loginResult){
    res.render('A-Home');

  }
  else {
    res.render('loginPage',{error: 'Error: Please enter valid username or password !!!'});
  }
});


module.exports = router;
