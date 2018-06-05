var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Joi = require('joi');
var userValidate = require('../lib/validation');
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

exports.addUser = function (user, callback) {
  newUser = new User(user);
  const userData = {
    username: newUser.username,
    phone: newUser.phone,
  }
  Joi.validate(userData, userValidate, (err, value) => {
    if(err) {
      console.log(err);
    } else {
      newUser.save(callback);
    }
  })
};
exports.getList = function (callback) {
  User.find({}, callback);
}

exports.getSingle = function (user, callback) {
  User.findById({_id: user.params.id}, callback);
};

exports.updateUser = function (user, callback) {
  User.findByIdAndUpdate({_id: user.params.id}, user.body, callback);
};

exports.deleteUser = function (user, callback) {
  User.findByIdAndRemove({ _id: user.params.id },callback);
};

exports.findUser = function (user, callback) {
  User.find({ $and: [{ username: user.params.username }, { phone: user.params.phone }] }, callback);
};
