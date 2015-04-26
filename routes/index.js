var express = require('express');
var router = express.Router();

var api = require('../config/api').init();

router.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

router.get('/version', function (req, res, netxt) {
    res.send({api_version: api.api_version});
});

module.exports = router;
