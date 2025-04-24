// User requirements
// 1. Create a simple API with endpoints to handle todo list CRUD functionality with the following endpoints:
// - GET /api/todos - Get all todos
// - GET /api/todos/:id - Get a single todo by ID
// - POST /api/todos - Create a new todo
// - PUT /api/todos/:id - Update a todo by ID
// - DELETE /api/todos/:id - Delete a todo by ID

// 2. Each todo should have:
// - id (starts at 0001 and increments)
// - title
// - completed (boolean)
// - createdAt

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware for JSON processing
app.use(express.json());

// In-memory todo list and counter
let todos = [];
let todoCounter = 1;

// Routes
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Fetch all todos
app.get("/api/todos", (req, res) => {
  if (todos.length === 0) {
    return res.status(404).json({ error: "No todos found." });
  }

  res.json({
    message: "Todo list fetched successfully",
    todos: todos
  });
});

// Fetch a single todo by ID
app.get("/api/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const todo = todos.find(t => t.id === todoId);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.json({
    message: `Todo with ID ${todoId} fetched successfully`,
    todo: todo
  });
});

// Create a new todo
app.post("/api/todos", (req, res) => {
  const { title, completed = false } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({ error: "Title is required and must be a string." });
  }

  const newId = todoCounter.toString().padStart(4, '0');
  todoCounter++;

  const newTodo = {
    id: newId,
    title,
    completed,
    createdAt: new Date().toISOString()
  };

  todos.push(newTodo);

  res.status(201).json({
    message: "Todo created successfully",
    todo: newTodo
  });
});

// Update a todo
app.put("/api/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const { title, completed } = req.body;
  const todoIndex = todos.findIndex(t => t.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  if (!title || typeof title !== "string") {
    return res.status(400).json({ error: "Title is required and must be a string." });
  }

  todos[todoIndex] = {
    ...todos[todoIndex],
    title,
    completed: typeof completed === "boolean" ? completed : todos[todoIndex].completed
  };

  res.json({
    message: `Todo with ID ${todoId} updated successfully`,
    todo: todos[todoIndex]
  });
});

// Delete a todo
app.delete("/api/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const index = todos.findIndex(t => t.id === todoId);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const deleted = todos.splice(index, 1);

  res.json({
    message: `Todo with ID ${todoId} deleted successfully`,
    deleted: deleted[0]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
