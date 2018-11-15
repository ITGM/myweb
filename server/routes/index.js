var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
      id:1,
      name:'json'
  })
});
router.get('/api', function(req, res, next) {
    res.json({
        id:2,
        name:'json'
    })
});

module.exports = router;
