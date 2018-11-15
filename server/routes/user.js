var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/api/user', function(req, res, next) {
    res.json({
        id:1,
        name:'user'
    })
});

module.exports = router;
