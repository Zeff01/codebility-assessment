const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Basic route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Backend is running on http://localhost:${PORT}`);
});

app.use(express.json());

let todos = [];
let idCount = 1;

app.get('/api/todos', (req, res) => {
    res.json({ todo: todos });
});

app.get('/api/todos/:id', (req, res) => {
    const todo = todos.find((todo) => todo.id === parseInt(req.params.id));

    if (!todo) {
        return res.status(404).json({
            message: 'Todo not found',
        });
    }

    res.json({ todo: todo });
});

app.post('/api/todos', (req, res) => {
    const { title, completed = false } = req.body;

    if (title === undefined) {
        res.status(400).json({ message: 'title is required' });
    }

    const newTodo = { id: idCount++, title, completed, createdAt: Date() };

    todos.push(newTodo);

    res.json({ todo: newTodo });
});

app.put('/api/todos/:id', (req, res) => {
    const todo = todos.find((todo) => todo.id === parseInt(req.params.id));

    if (!todo) {
        return res.status(404).json({
            message: 'Todo not found',
        });
    }

    const { title, completed } = req.body;

    if (title !== undefined) {
        todo.title = title;
    }

    if (completed !== undefined) {
        todo.completed = completed;
    }

    res.json({ todo: todo, message: 'Post updated successfully' });
});

app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex((todo) => todo.id === id);

    if (index === -1 || index === undefined) {
        return res.status(404).json({
            message: 'Todo not found',
        });
    }

    todos.splice(index, 1);
    res.json({ message: 'Post deleted successfully' });
});
