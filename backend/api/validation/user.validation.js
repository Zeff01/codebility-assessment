const joi = require('joi');
const VALIDATION_LANG = require('../enums/validation.enums');

// Check if valid password
const password = (value, helpers) => {
  if (value.length < 8) {
    return helpers.message(VALIDATION_LANG.MIN_CHARS('Password', 8));
  }
  if (!value.match(/[A-Z]/)) {
    return helpers.message(VALIDATION_LANG.MIN_UPCASE('Password', 1));
  }
  if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
    return helpers.message(VALIDATION_LANG.ALPLHA_NUMERIC('Password', 1));
  }
  if (!value.match(/[!@#\$%\^\&*\)\(+=._\-\[\]\+]+/)) {
    return helpers.message(VALIDATION_LANG.SPECIAL_CHARS('Password', 1));
  }
  return value;
};

// Registration validation
const registerValidation = joi.object({
  userName: joi.string().alphanum().min(3).max(25).trim(true).required(),
  firstName: joi.string().min(3).trim(true).required(),
  lastName: joi.string().min(3).trim(true).required(),
  password: joi.string().trim(true).custom(password).required(),
});

// Login validation
const loginValidation = joi.object({
  userName: joi.string().alphanum().min(3).max(25).trim(true).required(),
  password: joi.string().trim(true).custom(password).required(),
});

module.exports = {
  registerValidation,
  loginValidation,
};
