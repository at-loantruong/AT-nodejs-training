var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');

router.get('/', userController.getList);

router.post('/', userController.add);

router.get('/:id', userController.getSingle);

/* UPDATE Group */
router.put('/:id', userController.updateUser);

/* DELETE Group */
router.delete('/:id', userController.deleteUser);

router.get('/:username/:phone', userController.findUser);

module.exports = router;
