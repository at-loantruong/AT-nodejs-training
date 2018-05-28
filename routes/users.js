var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');

router.get('/', userController.index);

module.exports = router;
