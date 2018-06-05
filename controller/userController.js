var mongoose = require('mongoose');
var User = require('../models/user');

exports.add = function (req, res) {
  User.addUser(req.body, function (err, user) {
    if (err) throw err;
    res.send(200, user);
  })
}

exports.getList = function (req, res) {
  User.getList(function (err, data) {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
}
exports.getSingle = function (req, res) {
  User.getSingle(req, function (err, data) {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
};

exports.updateUser = function (req, res) {
  User.updateUser(req, function (err, data) {
    if (err) {
      res.send(err);
    }
    res.send('update success' + data);
  });
};

exports.deleteUser = function (req, res) {
  User.deleteUser(req, function (err, data) {
    if (err) {
      res.send(err);
    }
    res.send('delete success');
  });
};

exports.findUser = function (req, res) {
  User.findUser(req, function (err, data) {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
};
