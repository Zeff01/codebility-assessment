// file: routes/todos.js

const express = require('express');
const router = express.Router();

// Data in memory
let todos = [
    { id: 1, title: "Todo one", completed: false, createdAt: new Date().toISOString() },
    { id: 2, title: "Todo two", completed: false, createdAt: new Date().toISOString() }
];
let nextId = 3; // next id to give a todo(auto increment)

// GET /api/todos - get all todos
router.get('/', (req, res) => {
    return res.status(200).json(todos);
});

// GET /api/todos/:id - get one todo by id
router.get('/:id', (req, res) => {
    const task = todos.find(task => task.id === Number(req.params.id));

    // no todo with that id
    if (!task) {
        return res.status(404).json({ error: "Task not found."});
    }

    return res.json(task);
});

// POST /api/todos - create a new todo
router.post('/', (req, res) => {
    const { title } = req.body;

    // check if title exist and be text
    if (!title || typeof title !== 'string') {
        return res.status(400).json({ error: "Title is required and title must be a string." });
    }

    // build the new todo
    const newTask = { id: nextId++, title: title, completed: false , createdAt: new Date().toISOString() };

    // save new todo
    todos.push(newTask);

    return res.status(201).json(newTask);
});

// PUT /api/todos/:id - update a todo
router.put('/:id', (req, res) => {
    const task = todos.find(task => task.id === Number(req.params.id));

    // no todo with that id
    if (!task) {
        return res.status(404).json({ error: "Task not found." });
    }

    const { title, completed } = req.body;

    // only update the fields that were sent
    if (title !== undefined) task.title = title;
    if (completed !== undefined) task.completed = completed;

    return res.status(200).json(task);
});

// DELETE /api/todos/:id - delete a todo
router.delete('/:id', (req, res) => {
    const taskIndex = todos.findIndex(task => task.id === Number(req.params.id));

    // no todo with that id
    if (taskIndex === -1) {
        return res.status(404).json({ error: "Task not found." });
    }

    // remove it from the array
    const deletedTask = todos.splice(taskIndex, 1)[0];

    return res.status(200).json({ message: "Task deleted", task: deletedTask });
});

module.exports = router;
