var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Group = require('../models/Group.js');
var groupController = require('../controller/groupController');

/* GET ALL Group */
router.get('/', groupController.getAll);

/* GET SINGLE Group BY ID */
router.get('/:id', groupController.getSingle);

/* SAVE Group */
router.post('/', groupController.saveGroup);

/* UPDATE Group */
router.put('/:id', groupController.updateGroup);

/* DELETE Group */
router.delete('/:id', groupController.deleteGroup);

module.exports = router;
