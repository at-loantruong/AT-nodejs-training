var express = require('express');
var router = express.Router();
var validate = require('express-validation');
var userController = require('../controller/userController');
var userValidate = require('../lib/validation');

router.get('/', userController.getList);

router.post('/', validate(userValidate.register), userController.add);

router.get('/:id', userController.getSingle);

/* UPDATE Group */
router.put('/:id', userController.updateUser);

/* DELETE Group */
router.delete('/:id', userController.deleteUser);

router.get('/:username/:phone', userController.findUser);

module.exports = router;
