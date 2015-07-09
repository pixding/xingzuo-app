var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('doc', { title: '我是的地方阿斯发达' });
});

router.get('/create', function(req, res, next) {
  res.render('topedit', { title: '我是的地方阿斯发达' });
});

module.exports = router;
