const Joi = require('joi');

const customValidate = Joi.extend({
  base: Joi.string(),
  name: 'string',
  language: {
    errorMissingPassword: 'Password is invalid'
  },
  rules: [
    {
      name: 'customPassword',
      validate(params, value, state, options) {
        if(value.includes(state.parent.username)) {
          return this.createError('string.errorMissingPassword', {v: value}, state, options);
        }
      }
     }
  ]
});
module.exports = {
  register: {
    body: {
      username: Joi.string().required().options({
        language: {
          string: {
            base: 'Please input string.'
          }
        }
      }),
      phone: Joi.number().options({
        language: {
          string: {
            base: 'Please input number.'
          }
        }
      }),
      age: Joi.number().options({
        language: {
          string: {
            base: 'Please input number.'
          }
        }
      }),
      password:customValidate.string().customPassword()
    }
  }
}
