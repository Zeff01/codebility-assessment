import { Router } from 'express';
import { createTodo, deleteTodo, getTodoById, getTodos, toggleTodo, updateTodo } from '../controllers/todoController';

const router = Router();

router.get('/', getTodos);
router.get('/:id', getTodoById);
router.post('/', createTodo)
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo)
router.put('/toggle/:id', toggleTodo)

export default router;