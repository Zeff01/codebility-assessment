const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// GET /api/todos - List all todos
router.get('/', todoController.getAllTodos);

// GET /api/todos/:id - Get a single todo by ID
router.get('/:id', todoController.getTodoById);

// POST /api/todos - Create a new todo 
router.post('/', todoController.createTodo);

// PUT /api/todos/:id - Update a todo by ID
router.put('/:id', todoController.updateTodo);

// DELETE /api/todos/:id - Delete a todo by ID
router.delete('/:id', todoController.deleteTodo);

module.exports = router;