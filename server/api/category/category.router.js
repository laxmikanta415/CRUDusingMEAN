var router = require('express').Router();
var controller = require('./category.controller');
var execution = require('../../util/router.util');
execution(router,controller);

module.exports = router;