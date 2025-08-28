const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

let todos = [
  {
    id: 1,
    title: "Buy groceries",
    completed: false,
    createdAt: "2025-08-28T09:15:00Z",
  },
  {
    id: 2,
    title: "Finish project report",
    completed: false,
    createdAt: "2025-08-28T09:20:00Z",
  },
  {
    id: 3,
    title: "Call the bank",
    completed: true,
    createdAt: "2025-08-28T09:30:00Z",
  },
  {
    id: 4,
    title: "Go for a run",
    completed: false,
    createdAt: "2025-08-28T10:00:00Z",
  },
  {
    id: 5,
    title: "Read 20 pages of a book",
    completed: true,
    createdAt: "2025-08-28T11:00:00Z",
  },
];

let lastID = 5;

function validate(title, completed, createdAt) {
  let errors = [];

  if (!title) {
    errors.push({ field: "title", message: "title is required" });
  }

  if (typeof completed !== "boolean") {
    errors.push({ field: "completed", message: "completed must be boolean" });
  }

  if (isNaN(new Date(createdAt))) {
    errors.push({ field: "createdAt", message: "createdAt must be a valid date" });
  }

  return errors;
}

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/api/todos", (req, res) => {
  res.send(todos);
});

app.get("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedTodo = todos.find((todo) => todo.id === id);

  if (!selectedTodo) {
    res.status(404).json({ message: "item does not exist" });
    return;
  }

  res.send(selectedTodo);
});

app.post("/api/todos", (req, res) => {
  const { title, completed = false, createdAt } = req.body;

  const errors = validate(title, completed, createdAt);

  if (errors.length > 0) {
    res.status(422).json(errors);
    return;
  }

  let date = new Date(createdAt);

  const newTodo = {
    id: lastID + 1,
    title: title,
    completed: completed,
    createdAt: date,
  };

  todos.push(newTodo);
  lastID += 1;

  res.send("new todo successfully created");
});

app.put("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedTodo = todos.find((todo) => todo.id === id);

  if (!selectedTodo) {
    res.status(404).json({ message: "item does not exist" });
    return;
  }

  const { title = selectedTodo.title, completed = selectedTodo.completed, createdAt = selectedTodo.createdAt } = req.body;

  const errors = validate(title, completed, createdAt);

  if (errors.length > 0) {
    res.status(422).json(errors);
    return;
  }

  selectedTodo.title = title;
  selectedTodo.completed = completed;
  selectedTodo.createdAt = createdAt;

  res.send("Todo successfully updated");
});

app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedTodo = todos.find((todo) => todo.id === id);

  if (!selectedTodo) {
    res.status(404).json({ message: "item does not exist" });
    return;
  }

  todos = todos.filter((todo) => todo.id !== selectedTodo.id);

  res.send("Todo successfully deleted");
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
