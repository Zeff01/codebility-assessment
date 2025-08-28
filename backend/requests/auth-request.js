const { check } = require("express-validator");

exports.loginRules = [
  check("email")
    .exists()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Must be a valid email format"),
  check("password").exists().withMessage("Password is required"),
];
