const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// In-memory storage for todos
let todos = [];

// ============ BASIC ROUTE ============

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// ============ VALIDATION HELPER ============

const validateTodo = (data) => {
  const errors = [];
  
  if (!data.title || typeof data.title !== "string") {
    errors.push("Title is required and must be a string");
  }
  
  if (data.title && data.title.trim().length === 0) {
    errors.push("Title cannot be empty");
  }
  
  if (data.completed !== undefined && typeof data.completed !== "boolean") {
    errors.push("Completed must be a boolean");
  }
  
  return errors;
};

// ============ TODO API ENDPOINTS ============

/**
 * GET /api/todos
 * List all todos with optional filtering
 */
app.get("/api/todos", (req, res) => {
  try {
    const { completed } = req.query;
    
    let result = todos;
    
    // Optional filter by completed status
    if (completed !== undefined) {
      const isCompleted = completed === "true";
      result = todos.filter(todo => todo.completed === isCompleted);
    }
    
    res.status(200).json({
      success: true,
      count: result.length,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
      message: error.message
    });
  }
});

/**
 * GET /api/todos/:id
 * Get a single todo by ID
 */
app.get("/api/todos/:id", (req, res) => {
  try {
    const { id } = req.params;
    const todo = todos.find(t => t.id === id);
    
    if (!todo) {
      return res.status(404).json({
        success: false,
        error: "Todo not found",
        id
      });
    }
    
    res.status(200).json({
      success: true,
      data: todo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
      message: error.message
    });
  }
});

/**
 * POST /api/todos
 * Create a new todo
 */
app.post("/api/todos", (req, res) => {
  try {
    const { title, completed } = req.body;
    
    // Validation
    const errors = validateTodo({ title, completed });
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: errors
      });
    }
    
    // Create new todo
    const newTodo = {
      id: uuidv4(),
      title: title.trim(),
      completed: completed || false,
      createdAt: new Date().toISOString()
    };
    
    todos.push(newTodo);
    
    res.status(201).json({
      success: true,
      message: "Todo created successfully",
      data: newTodo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
      message: error.message
    });
  }
});

/**
 * PUT /api/todos/:id
 * Update a todo
 */
app.put("/api/todos/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    
    // Find todo
    const todo = todos.find(t => t.id === id);
    if (!todo) {
      return res.status(404).json({
        success: false,
        error: "Todo not found",
        id
      });
    }
    
    // Validate provided fields
    const updateData = {};
    if (title !== undefined) updateData.title = title;
    if (completed !== undefined) updateData.completed = completed;
    
    const errors = validateTodo({ 
      title: title !== undefined ? title : todo.title,
      completed: completed !== undefined ? completed : todo.completed
    });
    
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: errors
      });
    }
    
    // Update todo
    if (title !== undefined) todo.title = title.trim();
    if (completed !== undefined) todo.completed = completed;
    
    res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      data: todo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
      message: error.message
    });
  }
});

/**
 * DELETE /api/todos/:id
 * Delete a todo
 */
app.delete("/api/todos/:id", (req, res) => {
  try {
    const { id } = req.params;
    const index = todos.findIndex(t => t.id === id);
    
    if (index === -1) {
      return res.status(404).json({
        success: false,
        error: "Todo not found",
        id
      });
    }
    
    const deletedTodo = todos.splice(index, 1)[0];
    
    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
      data: deletedTodo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
      message: error.message
    });
  }
});

// ============ ERROR HANDLING ============

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Endpoint not found",
    path: req.path,
    method: req.method
  });
});

// Global error handler
app.use((error, req, res, next) => {
  res.status(500).json({
    success: false,
    error: "Internal server error",
    message: error.message
  });
});

// ============ START SERVER ============

app.listen(PORT, () => {
  console.log(`✅ Backend is running on http://localhost:${PORT}`);
  console.log(`📝 Todo API available at http://localhost:${PORT}/api/todos`);
});

module.exports = app;