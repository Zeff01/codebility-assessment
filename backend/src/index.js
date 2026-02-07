const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

let todos = [];
let nextId = 1;


const findTodoById = (id) => todos.find((t) => t.id === id);


// GET /api/todos - List all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});


// GET /api/todos/:id - Get a single todo
app.get("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid todo id" });
  }

  const todo = findTodoById(id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.json(todo);
});


// POST /api/todos - Create a new todo
app.post("/api/todos", (req, res) => {
  const { title, completed } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({ error: "Title is required and must be a string" });
  }

  const todo = {
    id: nextId++,
    title,
    completed: completed === true,
    createdAt: new Date().toISOString(),
  };

  todos.push(todo);
  res.status(201).json(todo);
});

// PUT /api/todos/:id - Update a todo
app.put("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, completed } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid todo id" });
  }

  const todo = findTodoById(id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

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


//  DELETE /api/todos/:id - Delete a todo
app.delete("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid todo id" });
  }

  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todos.splice(index, 1);
  res.status(204).send();
});


//  Global fallback
 
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
