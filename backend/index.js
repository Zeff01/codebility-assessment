const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const getDate = new Date();
const formattedDate = getDate.toDateString();

let todos = [
  { id: 1, title: "title 1", completed: false, createdAt: formattedDate },
];

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
  try {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (!todo) {
      const error = new Error(`Todo with id ${id} not found`);
      error.statusCode = 404;
      throw error;
    }
    res.json(todo);
  } catch (err) {
    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message,
    });
  }
});

// Create Todo
app.post("/api/todos", (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      const error = new Error("Title is required");
      error.statusCode = 400;
      throw error;
    }

    const createTodo = {
      id: todos.length + 1,
      title: title,
      completed: false,
      createAt: formattedDate,
    };
    todos.push(createTodo);
    res.status(201).json(createTodo);
  } catch (err) {
    res.status(err.statusCode);
  }
});

// Update todo
app.put("/api/todos/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    const todo = todos.find((t) => t.id === parseInt(id));

    if (!todo) {
      const error = new Error(`Todos with that ${id} not found`);
      error.statusCode = 404;
      throw error;
    }

    if (typeof completed !== "boolean") {
      const error = new Error("Completd must be true or false");
      error.statusCode = 404;
      throw error;
    }

    todo.completed = completed;

    res.json({ success: true, data: todo });
  } catch (err) {
    res
      .status(err.statusCode || 500)
      .json({ success: true, message: err.message });
  }
});

// Delete todo
app.delete("/api/todos/:id", (req, res) => {
  try {
    const { id } = req.params;

    const todoIndex = todos.findIndex((t) => t.id === parseInt(id));

    if (todoIndex === -1) {
      const error = new Error("Todo not found");
      error.statusCode = 404;
      throw error;
    }
    const deletedTodo = todos.splice(todoIndex, 1)[0];

    res.json({
      success: true,
      message: "Todo deleted successfully",
      data: deletedTodo,
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message,
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
