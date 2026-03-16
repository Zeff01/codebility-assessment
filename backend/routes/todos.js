const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/', (req, res) => {
    res.json(Todo.getAllTodos());
});

router.get('/:id', (req, res) => {
    const todo = Todo.getTodoById(parseInt(req.params.id));
    if (!todo) return res.status(404).json({ error: 'Todo not found' });
    res.json(todo);
});

router.post('/', (req, res) => {
    const { title } = req.body;
    if (!title || typeof title !== 'string') return res.status(400).json({ error: 'Title required' });
    const newTodo = Todo.createTodo(title);
    res.status(201).json(newTodo);
});

router.put('/:id', (req, res) => {
    const updated = Todo.updateTodo(parseInt(req.params.id), req.body);
    if (!updated) return res.status(404).json({ error: 'Todo not found' });
    res.json(updated);
});

router.delete('/:id', (req, res) => {
    const deleted = Todo.deleteTodo(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ error: 'Todo not found' });
    res.json(deleted);
});

module.exports = router;