const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

let todos = [
  {
    id: "1",
    title: "Wash Dishes",
    completedAt: false,
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Iron Uniform",
    completedAt: false,
    createdAt: new Date(),
  }
];

// Default route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Get all todos 
app.get("/api/todos", (req, res) => {
  res.send(todos);
});

// Get single todo 
app.get("/api/todo/:id", (req, res) => {
  const todoID = req.params.id;
  const todo = todos.find(t => t.id === todoID);

  if (!todo) {
    return res.status(404).send({ message: "Todo was not found" });
  }

  res.send(todo);
});

// Create new todo
app.post("/api/todo", (req, res) => {
  const { title } = req.body;
  console.log(title)
  if (!title) {
    return res.status(400).send({ message: "Title is required" });
  }

  const newTodo = {
    id: (todos.length + 1).toString(),
    title: title,
    completedAt: false,
    createdAt: new Date()
  };

  todos.push(newTodo);

  res.status(201).send(newTodo);
});

// Update a todo
app.put("/api/todo/:id", (req, res) => {
  const todoID = req.params.id;
  const todo = todos.find(t => t.id === todoID);

  if (!todo) {
    return res.status(404).send({ message: "Todo was not found" });
  }

  const { title, completed } = req.body;

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completedAt = completed;

  res.send(todo);
});

// Delete a todo
app.delete("/api/todo/:id", (req, res) => {
  const todoID = req.params.id;
  const index = todos.findIndex(t => t.id === todoID);

  if (index === -1) {
    return res.status(404).send({ message: "Todo was not found" });
  }

  const deleted = todos.splice(index, 1);
  res.send({
    message: "Todo  successfully deleted",
    deleted: deleted[0]
  });
});



// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
