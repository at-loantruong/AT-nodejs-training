var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  age: {
    type: Number
  },
  phone: {
    type: Number
  }
}),

  User = mongoose.model('User', userSchema);

var newUser = new User;
let hash = bcrypt.hashSync('password', 10);
// console.log(hash);
// exports.addUser = function (req, res) {
//   User.create(req.body, function (err, data) {
//     if (err) res.json(err);
//     res.send(data);
//   });
// };
exports.addUser = function(req, res) {
  newUser.username = req.username;
  newUser.password = hash;
  newUser.age = req.age;
  newUser.phone = req.phone;
  newUser.save()
  .then(data => res.send(data))
  .catch(err => res.send(err));
};

exports.getList = function (req, res) {
  User.find({}, function (err, data) {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
}

exports.getSingle = function (req, res) {
  User.findById({ _id: req.params.id }, function (err, data) {
    res.json(data);
  });
};

exports.updateUser = function (req, res) {
  var id = req.params.id;
  User.findByIdAndUpdate({ _id: id }, req.body, function (err, data) {
    if (err) res.json(err);
    res.send(data);
  });
};

exports.deleteUser = function (req, res) {
  var id = req.params.id;
  User.findByIdAndRemove({ _id: id }, function (err, data) {
    if (err) res.json(err);
    res.send(data);
  });
};

exports.findUser = function (req, res) {
  console.log('name', req.params.username, req.params.phone);
  User.find({ $and: [{ username: req.params.username}, { phone: req.params.phone }] }, function (err, data) {
    if (err) res.send(err);
    res.send(data);
  });
};
