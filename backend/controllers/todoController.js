let todos = require("../data/todos");

const getTodos = (req, res) => {
    res.json(todos);
};

const getTodoById = (req, res) => {
    const { id } = req.params;

    const todo = todos.find(t => t.id === parseInt(id));

    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    res.json(todo);
};

const createTodo = (req, res) => {
    const { title } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({ message: "Title is required" });
    }

    const newTodo = {
        id: todos.length + 1,
        title: title,
        completed: false,
        createdAt: new Date(),
    }

    todos.push(newTodo);
    res.status(201).json( newTodo );
};

const updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    const todo = todos.find(t => t.id === parseInt(id));

    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    // Validation
    if (title !== undefined && title.trim() === "") {
        return res.status(400).json({ message: "Title cannot be empty" });
    }

    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;

    res.json(todo);
};

const deleteTodo = (req, res) => {
    const { id } = req.params;

    const index = todos.findIndex(t => t.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ message: "Todo not found" });
    }

    todos.splice(index, 1);

    res.json({ message: "Todo deleted successfully" });
};
 
module.exports = { getTodos, createTodo, getTodoById, updateTodo, deleteTodo};