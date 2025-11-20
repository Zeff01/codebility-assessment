const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());

const todos = [];
let nextId = 1;

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.get("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id); 
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.json(todo);
});

app.post("/api/todos", (req, res) => {
  const { title, completed } = req.body; 

  if (!title || typeof title !== "string") {
    return res.status(400).json({ error: "Title is required and must be a string" });
  }

  const newTodo = {
    id: nextId++,
    title: title.trim(),
    completed: completed || false, 
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const { title, completed } = req.body;

  if (title !== undefined) todo.title = title.trim();
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

app.delete("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todos.splice(index, 1);
  res.status(204).send(); 
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});