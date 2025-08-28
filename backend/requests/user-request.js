const { check } = require("express-validator");

exports.createUserRules = [
  check("firstName").exists().withMessage("Firstname is required"),
  check("lastName").exists().withMessage("Lastname is required"),
  check("roleId").exists().withMessage("Please select role"),

  check("email")
    .exists()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Must be a valid email format"),
  check("password").exists().withMessage("Password is required"),
  check("passwordConfirmation").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  }),
];

exports.updateUserRules = [
  check("firstName").exists().withMessage("Firstname is required"),
  check("lastName").exists().withMessage("Lastname is required"),
  check("roleId").exists().withMessage("Please select role"),

  check("email")
    .exists()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Must be a valid email format"),
  check("password").exists().withMessage("Password is required"),
  check("passwordConfirmation").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  }),
];
