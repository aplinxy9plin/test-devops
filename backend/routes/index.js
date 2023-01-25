var express = require('express');
var router = express.Router();

var SECRET = process.env.SECRET
var OTHER_ENV = process.env.OTHER_ENV

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    "name": "John Doe",
    "secret": SECRET,
    "other_env": OTHER_ENV
  })
});

module.exports = router;
