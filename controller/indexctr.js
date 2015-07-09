var express = require('express');
var router = express.Router();
var util = require('./util.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload',function(req,res,next){
  //.postUpload(req,res,next);
  res.json('{"name":"zhangsan"}');
});

module.exports = router;
