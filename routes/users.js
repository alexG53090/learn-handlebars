var express = require('express');
var router = express.Router();

var users = ['mike', 'billy', 'adam', 'cj', 'sam', 'roberto', 'isaac']

var usersobj = {
  name: 'mike',
  name: 'billy',
  name: 'adam',
  name: 'cj',
  name: 'sam',
  name: 'roberto',
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {usersobj: usersobj, users: users})
});

module.exports = router;
