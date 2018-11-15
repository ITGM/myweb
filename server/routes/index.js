var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/api', function(req, res, next) {
    res.json({
        id:1,
        name:'json'
    })
});
router.get('/api/id', function(req, res, next) {
    res.json({
        id:1,
        name:'id'
    })
});
module.exports = router;
