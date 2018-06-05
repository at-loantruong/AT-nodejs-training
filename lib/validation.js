const Joi = require('joi');

const userSchema =  Joi.object().keys({
  username: Joi.string(),
  phone: Joi.number().integer(),
  // password: Joi.validationPassword(),
});
