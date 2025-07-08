const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

let todos = [];
let nextId = 1;

// list all todos request
app.get("/api/todos", (req, res) => {
  try {
    res.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// single todo request
app.get("/api/todos/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    // Check if id is a valid number
    if (isNaN(id) || id <= 0) {
      return res.status(400).json({ error: "Invalid todo ID" });
    }
    
    const todo = todos.find(t => t.id === id);

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.json(todo);
  } catch (error) {
    console.error("Error fetching todo:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// create a new todo
app.post("/api/todos", (req, res) => {
  try {
    const { title, completed } = req.body;
    
    // Validate required fields
    if (!title || typeof title !== "string") {
      return res.status(400).json({ error: "Title is required and must be a string" });
    }
    
    // Validate title length
    if (title.trim().length === 0) {
      return res.status(400).json({ error: "Title cannot be empty" });
    }
    
    // Validate completed field if provided
    if (completed !== undefined && typeof completed !== "boolean") {
      return res.status(400).json({ error: "Completed must be a boolean" });
    }
    
    const newTodo = {
      id: nextId++,
      title: title.trim(),
      completed: Boolean(completed),
      createdAt: new Date().toISOString()
    };
    
    todos.push(newTodo);
    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// update a todo
app.put("/api/todos/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, completed } = req.body;
    
    // Validate ID
    if (isNaN(id) || id <= 0) {
      return res.status(400).json({ error: "Invalid todo ID" });
    }
    
    const todo = todos.find(t => t.id === id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    
    // Validate title if provided
    if (title !== undefined) {
      if (typeof title !== "string") {
        return res.status(400).json({ error: "Title must be a string" });
      }
      if (title.trim().length === 0) {
        return res.status(400).json({ error: "Title cannot be empty" });
      }
    }
    
    // Validate completed field if provided
    if (completed !== undefined && typeof completed !== "boolean") {
      return res.status(400).json({ error: "Completed must be a boolean" });
    }
    
    // Check if at least one field is being updated
    if (title === undefined && completed === undefined) {
      return res.status(400).json({ error: "At least one field (title or completed) must be provided" });
    }
    
    // Update fields
    if (title !== undefined) todo.title = title.trim();
    if (completed !== undefined) todo.completed = completed;
    
    res.json(todo);
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// delete a todo
app.delete("/api/todos/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    // Validate ID
    if (isNaN(id) || id <= 0) {
      return res.status(400).json({ error: "Invalid todo ID" });
    }
    
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) {
      return res.status(404).json({ error: "Todo not found" });
    }
    
    const deleted = todos.splice(index, 1);
    res.json({ message: "Todo deleted", todo: deleted[0] });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});