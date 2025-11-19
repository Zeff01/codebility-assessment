import express from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo, getTodoById } from '../controllers/todo.controller.js';

const router = express.Router();

router.get('/todos', getTodos);
router.get('/todos/:id', getTodoById);
router.post('/todos', createTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

export default router;