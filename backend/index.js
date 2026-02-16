const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const getDate = new Date();

let todos = [{ id: 1, title: "title 1", completed: false, createdAt: getDate }];

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// List out todo
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// Get specific todo
app.get("/api/todos/:id", (req, res) => {
  const todo = todos.find(({ id }) => id === parseInt(req.params.id));

  if (!todos) {
    return res.status(404).send("Todos with that id not found");
  }
  res.json(todo);
});

// Create Todo
app.post("/api/todos", (req, res) => {
  const createTodo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: false,
    createAt: getDate,
  };
  todos.push(createTodo);
  res.status(201).json(createTodo);
});

// Delete todo
app.delete("/api/todos/:id", (req, res) => {
  todos.filter(({ id }) => id !== parseInt(req.params.id));
  res.send("Book deletd");
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
