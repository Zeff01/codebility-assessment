const express = require("express");
const router = express.Router();
const {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
} = require("../data/todos");

// GET all todos
router.get("/", (req, res) => {
  res.json(getTodos());
});

// GET a todo by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = getTodoById(id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  res.json(todo);
});

// POST a new todo
router.post("/", (req, res) => {
  const { title } = req.body;
  if (!title || typeof title !== "string") {
    return res.status(400).json({ error: "Invalid title" });
  }
  const newTodo = createTodo(title);
  res.status(201).json(newTodo);
});

// PUT update a todo
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updated = updateTodo(id, req.body);
  if (!updated) return res.status(404).json({ error: "Todo not found" });
  res.json(updated);
});

// DELETE a todo
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = deleteTodo(id);
  if (!deleted) return res.status(404).json({ error: "Todo not found" });
  res.json({ message: "Todo deleted", todo: deleted });
});

module.exports = router;
