const Todo = require("../models/todoModel");

exports.getTodos = (req, res) => {
  res.json(Todo.getAll());
};

exports.getTodoById = (req, res) => {
  const { id } = req.params;
  const todo = Todo.getById(id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(todo);
};

exports.createTodo = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTodo = Todo.create(req.body);
  res.status(201).json(newTodo);
};

exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const updated = Todo.update(id, req.body);

  if (!updated) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(updated);
};

exports.deleteTodo = (req, res) => {
  const { id } = req.params;
  const deleted = Todo.remove(id);

  if (!deleted) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(deleted);
};
