const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});

// GET all List todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// parse JSON body
app.use(express.json());

// store todos in memory
let todos = [];
let idCounter = 1;

// GET todo by ID

app.get("/api/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  res.json(todo);
});

// Create a new todo
app.post("/api/todos", (req, res) => {
  const { title, completed } = req.body;

  if (!title || typeof title !== "string") {
    return res
      .status(400)
      .json({ error: "Title is required and must be a string" });
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    return res.status(400).json({ error: "Completed must be a boolean" });
  }

  const newTodo = {
    id: idCounter++,
    title,
    completed: completed ?? false,
    createdAt: new Date().toISOString(),
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT todo by ID
app.put("/api/todos/:id", (req, res) => {
  const { title, completed } = req.body;
  const todo = todos.find((t) => t.id === parseInt(req.params.id));

  if (!todo) return res.status(404).json({ error: "Todo not found" });

  if (title !== undefined) {
    if (typeof title !== "string") {
      return res.status(400).json({ error: "Title must be a string" });
    }
    todo.title = title;
  }

  if (completed !== undefined) {
    if (typeof completed !== "boolean") {
      return res.status(400).json({ error: "Completed must be a boolean" });
    }
    todo.completed = completed;
  }

  res.json(todo);
});

// DELETE todo by ID

app.delete("/api/todos/:id", (req, res) => {
  const index = todos.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Todo not found" });

  const deleted = todos.splice(index, 1);
  res.json(deleted[0]);
});
