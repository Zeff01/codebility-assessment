const express = require("express");
const { body } = require("express-validator");
const { register, login } = require("../controllers/auth.controller");
const validate = require("../middlewares/validate.middleware");

const router = express.Router();

const registerValidation = [
  body("username").isString().notEmpty().withMessage("Username is required"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 chars long"),
];

const loginValidation = [
  body("username").isString().notEmpty(),
  body("password").isString().notEmpty(),
];

router.post("/register", registerValidation, validate, register);
router.post("/login", loginValidation, validate, login);

module.exports = router;
