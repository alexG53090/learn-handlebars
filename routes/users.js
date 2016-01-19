var express = require('express');
var router = express.Router();

var users = ['mike', 'billy', 'adam', 'cj', 'sam', 'roberto', 'isaac']

var usersobj = {
  name: 'mike',
  name1: 'billy',
  name2: 'adam',
  name3: 'cj',
  name4: 'sam',
  name5: 'roberto',
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {usersobj: usersobj, users: users})
});

module.exports = router;
