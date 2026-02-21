const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// Get all todos
router.get("/", todoController.getAllTodos);

// Get a single todo by ID
router.get("/:id", todoController.getTodo);

// Create a new todo
router.post("/", todoController.addTodo);

// Update a specific todo by ID
router.put("/:id", todoController.updateTodo);

// Delete a specific todo by ID
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
