const express = require('express');
const router = express.Router();
const {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todoController');

router.get('/', getAllTodos);
router.get('/:id', getTodoById);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;