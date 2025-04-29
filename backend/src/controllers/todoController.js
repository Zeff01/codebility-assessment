const Todos = require("../models/todo");
const AppError = require("../utils/AppError");
const validateTodoFields = require("../utils/validateTodoFields");
const validateRequiredFields = require("../utils/validateRequiredFields");

// List all todos
exports.getAllTodos = async (req, res, next) => {
  const allTodos = Todos.getAllTodos();
  return res
    .status(200)
    .json({ message: "Todos retrieved successfully", data: allTodos });
};

// Get a single todo
exports.getTodoById = async (req, res, next) => {
  const { id } = req.params;
  const todo = Todos.getTodo(id);

  if (!todo) {
    return next(new AppError("Todo not found", 404));
  }

  return res
    .status(200)
    .json({ message: "Todo retrieved successfully", data: todo });
};

// Create a new todo
exports.createTodo = async (req, res, next) => {
  const { title, completed = false } = req.body;

  // Check for required fields
  validateRequiredFields({ title });

  // Validate fields
  validateTodoFields(title, completed);

  // Create the todo (ID will be generated in setTodo)
  const todo = Todos.setTodo(undefined, title, completed);

  return res
    .status(201)
    .json({ message: "Todo created successfully", data: todo });
};

// Update a todo
exports.updateTodo = async (req, res, next) => {
  const { title, completed } = req.body;
  const { id } = req.params;

  if (!id) {
    return next(new AppError("ID is required to update a todo", 400));
  }

  const todo = Todos.getTodo(id);
  if (!todo) {
    return next(new AppError("Todo not found", 404));
  }

  // Check for required fields
  validateRequiredFields({ title, completed });

  // Validate fields
  validateTodoFields(title, completed);

  // Update the todo (pass the existing `id` here)
  const updatedTodo = Todos.setTodo(id, title, completed);

  return res
    .status(200)
    .json({ message: "Todo updated successfully", data: updatedTodo });
};

// Delete a todo
exports.deleteTodo = async (req, res, next) => {
  const { id } = req.params;

  const todo = Todos.getTodo(id);
  if (!todo) {
    return next(new AppError("Todo not found", 404));
  }

  Todos.deleteTodo(id);

  return res.status(200).json({ message: "Todo deleted successfully" });
};
