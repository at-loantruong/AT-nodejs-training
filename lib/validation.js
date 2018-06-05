const Joi = require('joi');

const userValidate =  Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30),
  phone: Joi.number().integer(),
  // password: Joi.validationPassword(),
});
var customJoi = Joi.extend({
  base: Joi.number(),

  name: 'number',

  language: {

  },
});
module.exports = userValidate;
