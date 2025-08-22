const express = require("express");
const todoController = require("../controllers/todos.controller");
const { body } = require("express-validator");
const { validateUpdateTodo, validateCreateTodo } = require("../middlewares/todoValidator");

const router = express.Router();

router.get("/api/todos", todoController.todoList); // List all todos

router.get("/api/todos/:id", todoController.getTodo); // Get a single todo

// Create new todo
router.post("/api/todos", validateCreateTodo, todoController.createTodo);

// Update a todo
router.put("/api/todos/:id", validateUpdateTodo, todoController.updateTodo);

router.delete("/api/todos/:id", todoController.deleteTodo); // Delete a todo

module.exports = router;
