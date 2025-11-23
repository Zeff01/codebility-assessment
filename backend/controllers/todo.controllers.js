const todoService = require("../services/todo.service");

exports.getAllTodos = (req, res) => {
    const todos = todoService.getAll();
    res.json(todos);
};

exports.getTodoById = (req, res) => {
    const todo = todoService.getById(req.params.id);

    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    res.json(todo);
};

exports.createTodo = (req, res) => {
    const newTodo = todoService.create(req.body);
    res.status(201).json(newTodo);
};

exports.updateTodo = (req, res) => {
    const updated = todoService.update(req.params.id, req.body);

    if (!updated) {
        return res.status(404).json({ message: "Todo not found" });
    }

    res.json(updated);
};

exports.deleteTodo = (req, res) => {
    const deleted = todoService.remove(req.params.id);

    if (!deleted) {
        return res.status(404).json({ message: "Todo not found" });
    }

    res.json({
        message: "Todo deleted successfully",
        todo: deleted
    });
};
