const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { validateTodo } = require("../middleware/validationMiddleware");

const router = express.Router();

// ---- In-memory data store ----
let todos = [];

// =============================================
// GET /api/todos — List all todos
// =============================================
router.get("/", (req, res) => {
  res.json({
    count: todos.length,
    todos,
  });
});

// =============================================
// GET /api/todos/:id — Get a single todo
// =============================================
router.get("/:id", (req, res) => {
  const todo = todos.find((t) => t.id === req.params.id);

  if (!todo) {
    return res.status(404).json({ error: `Todo with id '${req.params.id}' not found` });
  }

  res.json(todo);
});

// =============================================
// POST /api/todos — Create a new todo
// =============================================
router.post("/", validateTodo, (req, res) => {
  const { title, completed } = req.body;

  const newTodo = {
    id: uuidv4(),
    title: title.trim(),
    completed: completed || false,
    createdAt: new Date().toISOString(),
  };

  todos.push(newTodo);

  res.status(201).json(newTodo);
});

// =============================================
// PUT /api/todos/:id — Update a todo
// =============================================
router.put("/:id", validateTodo, (req, res) => {
  const index = todos.findIndex((t) => t.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: `Todo with id '${req.params.id}' not found` });
  }

  const { title, completed } = req.body;

  // Only update fields that were provided
  if (title !== undefined) {
    todos[index].title = title.trim();
  }

  if (completed !== undefined) {
    todos[index].completed = completed;
  }

  res.json(todos[index]);
});

// =============================================
// DELETE /api/todos/:id — Delete a todo
// =============================================
router.delete("/:id", (req, res) => {
  const index = todos.findIndex((t) => t.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: `Todo with id '${req.params.id}' not found` });
  }

  const deleted = todos.splice(index, 1)[0];

  res.json({
    message: "Todo deleted successfully",
    todo: deleted,
  });
});

module.exports = router;