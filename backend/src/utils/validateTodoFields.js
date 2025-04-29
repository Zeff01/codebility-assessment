const AppError = require("./AppError");

const validateTodoFields = (title, completed) => {
  if (typeof title !== "string") {
    throw new AppError("Title must be a string", 400);
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    throw new AppError("Completed must be a boolean", 400);
  }
};

module.exports = validateTodoFields;
