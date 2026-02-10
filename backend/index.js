const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// storing in memory for now - can switch to db later
let todos = [];
let nextId = 1;

app.get("/", (req, res) => {
  res.send("Todo API - use /api/todos");
});

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.get("/api/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.json(todo);
});

app.post("/api/todos", (req, res) => {
  const { title, completed } = req.body;

  // basic validation
  if (!title || title.trim() === "") {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTodo = {
    id: nextId++,
    title: title.trim(),
    completed: completed || false, // default to false if not provided
    createdAt: new Date().toISOString()
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/api/todos/:id", (req, res) => {
  const { title, completed } = req.body;
  const todo = todos.find(t => t.id === parseInt(req.params.id));

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  if (!title || title.trim() === "") {
    return res.status(400).json({ error: "Title is required" });
  }

  todo.title = title.trim();
  // only update completed if it's passed in
  if (completed !== undefined) {
    todo.completed = completed;
  }

  res.json(todo);
});

app.delete("/api/todos/:id", (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const deleted = todos.splice(index, 1)[0];
  res.json(deleted);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
