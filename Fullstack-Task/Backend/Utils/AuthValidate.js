const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  mobile: Joi.string().pattern(/^01[0125][0-9]{8}$/).required(),
});
module.exports = userSchema;