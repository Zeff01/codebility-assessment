const express = require("express");
const router = express.Router();

let todos = [];
let nextId = 1;

//  GET all todos
router.get("/", (req, res) => {
  res.json(todos);
});

//  GET single todo
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.json(todo);
});

//  CREATE new todo
router.post("/", (req, res) => {
  const { title, completed } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({ error: "Title is required and must be a string" });
  }

  const newTodo = {
    id: nextId++,
    title,
    completed: completed === true, // default to false if not provided
    createdAt: new Date().toISOString(),
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

//  UPDATE todo
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const { title, completed } = req.body;

  if (title && typeof title !== "string") {
    return res.status(400).json({ error: "Title must be a string" });
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    return res.status(400).json({ error: "Completed must be a boolean" });
  }

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

//  DELETE todo
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const deletedTodo = todos.splice(index, 1);
  res.json({ message: "Todo deleted", todo: deletedTodo[0] });
});

module.exports = router;
