var express = require('express');
var router = express.Router();
var totalCaseController = require('../controller/totalCaseController.js');
<<<<<<< HEAD
var advisesController = require('../controller/advisesController');

/* GET home page. */
=======
var advisesController = require('../controller/advisesController.js');
var utilities = require("./utility");
/* GET home page.
>>>>>>> 294cba528a6197f937b28f118eef3304c872cffd
router.get('/', function(req, res, next) {
  res.render('H-Home', { title: 'Team Ultra Protection' });
});

router.get('/login', utilities.isLoggedIn, function (req,res,next) {
    res.render('A-Home', {username: 'Hello admin, Please enter the data'});
});

router.get('/contact',function (req,res,next) {
  res.render('H-contact');
});

router.get('/healthTips',function (req,res,next) {
  res.render('H-healthTips');
})

router.get('/charts',function (req,res,next) {
  res.render('H-charts');
})

router.get('/advises',function (req,res,next) {
  res.render('H-advises');
})

router.get('/Home',function (req,res,next) {
  res.render('H-Home');
});

router.get('/Home#', totalCaseController.findlatesttotalCase);

router.post('/insertAdvise', advisesController.createAdvise);

module.exports = router;
