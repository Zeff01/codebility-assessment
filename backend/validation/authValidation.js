// validation/authValidation.js
const Joi = require('joi');

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(128).required()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

const emailOnlySchema = Joi.object({
  email: Joi.string().email().required()
});

function validateRegister(body) {
  const { error, value } = registerSchema.validate(body);
  if (error) {
    const err = new Error(error.details[0].message);
    err.status = 400;
    throw err;
  }
  return value;
}

function validateLogin(body) {
  const { error, value } = loginSchema.validate(body);
  if (error) {
    const err = new Error(error.details[0].message);
    err.status = 400;
    throw err;
  }
  return value;
}

function validateEmailOnly(body) {
  const { error, value } = emailOnlySchema.validate(body);
  if (error) {
    const err = new Error(error.details[0].message);
    err.status = 400;
    throw err;
  }
  return value;
}

module.exports = {
  validateRegister,
  validateLogin,
  validateEmailOnly
};
