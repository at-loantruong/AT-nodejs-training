var mongoose = require('mongoose');
var Group = require('../models/Group');

exports.getAll = function(req, res){
  Group.getAll(req, res);
};

exports.getSingle = function(req, res){
  Group.getSingle(req, res);
};

exports.saveGroup = function(req, res){
  Group.saveGroup(req.body, res);
};

exports.updateGroup = function(req, res){
  Group.updateGroup(req, res);
};

exports.deleteGroup = function(req, res){
  Group.deleteGroup(req, res);
};
