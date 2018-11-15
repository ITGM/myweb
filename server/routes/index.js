var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', function(req, res, next) {
  res.json({
      id:1,
      name:'json'
  })
});

module.exports = router;
