const express = require('express');

const router = express.Router();

const todos = [
    { id: 1, title: "Buy groceries", completed: false, createdAt: new Date() },
    { id: 2, title: "Finish assignment", completed: true, createdAt: new Date() },
    { id: 3, title: "Walk the dog", completed: false, createdAt: new Date() }
];

//Lists all todos
router.get('/', async (req , res) => {
    try {
        res.json(todos);
    } catch (err) {
        res.status(400).json("Failed to fetch todos");
    }
});

//Lists a todo selected via its id
router.get('/:id', async (req , res) => {
    try {
        const id = Number(req.params.id);
        const todo = todos.find(t => t.id === id);
        if (!todo) {
            return res.status(404).json({error: "Todo not found"});
        }
        res.json(todo);
    } catch (err) {
        res.status(400).json({error: "Failed to get todo"});
    }
});

//Creates a new todo
router.post('/', async (req, res) => {
    try {
        const id = todos.length > 0 ? todos[todos.length-1].id : 0;
        const { title, completed = false } = req.body;

        const newTodo = {
            id: id + 1,
            title,
            completed,
            createdAt: new Date()
        };
        todos.push(newTodo);

        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json("Failed to create todo");
    }
});

//Updates an existing todo
router.put('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { title, completed } = req.body;

        const todo = todos.find(t => t.id === id);
        if (!todo) {
            return res.status(404).json({error: "Cannot find todo"});
        }

        if (title !== undefined) todo.title = title;
        if (completed !== undefined) todo.completed = completed;
        res.json(todo);
    } catch (err) {
        res.status(400).json({error: "Updating failed"})
    }
});

//Deletes an exisiting todo
router.delete('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const index = todos.findIndex(t => t.id === id);
        if (index === -1) {
            return res.status(404).json({ error: "Todo not found" });
        }

        todos.splice(index, 1);
        res.json({message: "Todo deleted successfully"});
    } catch (error) {
        res.status(400).json({error: "Deletion Failed"});
    }
});

module.exports = router;