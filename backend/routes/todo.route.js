import express from 'express';
import {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
} from '../controllers/todo.controller.js';
import { validateTodo } from '../middleware/validation.js';

const router = express.Router();

// GET /api/todos - List all todos
router.get('/', getAllTodos);

// GET /api/todos/:id - Get a single todo
router.get('/:id', getTodoById);

// POST /api/todos - Create a new todo
router.post('/', validateTodo, createTodo);

// PUT /api/todos/:id - Update a todo
router.put('/:id', updateTodo);

// DELETE /api/todos/:id - Delete a todo
router.delete('/:id', deleteTodo);

export default router;
