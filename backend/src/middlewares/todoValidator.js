const { body } = require("express-validator");

exports.validateCreateTodo = [
  body("title").trim().escape().isLength({ min: 1 }).withMessage("Title is required"),
  body("completed").isBoolean().withMessage("Completed must be a boolean value"),
];

exports.validateUpdateTodo = [
  body("title").trim().escape().isLength({ min: 1 }).withMessage("Title is required"),
  body("completed").optional().isBoolean().withMessage("Completed must be a boolean value"),
];
