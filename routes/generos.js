var express = require('express');
var router = express.Router();

/* GET generos listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
