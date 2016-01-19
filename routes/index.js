var express = require('express');
var router = express.Router();

var name = 'Alex';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: name });
});

module.exports = router;
