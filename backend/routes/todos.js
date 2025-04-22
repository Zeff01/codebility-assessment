const express = require("express");
const router = express.Router();

// In-memory storage
let todos = [];
let currentId = 1;

// GET all todos
router.get("/", (req, res) => {
  res.json(todos);
});

// GET a single todo
router.get("/:id", (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  res.json(todo);
});

// CREATE a new todo
router.post("/", (req, res) => {
  const { title, completed } = req.body;
  if (typeof title !== "string" || typeof completed !== "boolean") {
    return res.status(400).json({ error: "Invalid input" });
  }

  const newTodo = {
    id: currentId++,
    title,
    completed,
    createdAt: new Date().toLocaleDateString("en-CA"),
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// UPDATE a todo
router.put("/:id", (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: "Todo not found" });

  const { title, completed } = req.body;
  if (typeof title !== "string" || typeof completed !== "boolean") {
    return res.status(400).json({ error: "Invalid input" });
  }

  todo.title = title;
  todo.completed = completed;
  res.json(todo);
});

// DELETE a todo
router.delete("/:id", (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Todo not found" });

  todos.splice(index, 1);
  res.json({ message: "Todo deleted" });
});

module.exports = router;
