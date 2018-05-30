var mongoose = require('mongoose');
var User = require('../models/user');

exports.add = function(req, res) {
  User.addUser(req.body, res);
}

exports.getList = function(req, res) {
  User.getList(req, res);
}
exports.getSingle = function(req, res) {
  User.getSingle(req, res);
};

exports.updateUser = function(req, res) {
  User.updateUser(req, res);
};

exports.deleteUser = function(req, res) {
  User.deleteUser(req, res);
};

exports.findUser = function(req, res) {
  User.findUser(req, res);
};
