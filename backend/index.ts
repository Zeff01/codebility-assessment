import express, { Request, Response } from "express";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

let todos: Todo[] = [];
let nextId = 1;

const findTodoById = (id: number): Todo | undefined => {
  return todos.find(todo => todo.id === id);
};

const validateTodoData = (data: any): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!data.title || typeof data.title !== 'string' || data.title.trim() === '') {
    errors.push('Title is required and must be a non-empty string');
  }
  
  if (data.completed !== undefined && typeof data.completed !== 'boolean') {
    errors.push('Completed must be a boolean value');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Routes
// GET / - API info
app.get("/", (req: Request, res: Response): void => {
  res.json({
    message: "Todo API Server",
    version: "1.0.0",
    endpoints: [
      "GET /api/todos - List all todos",
      "GET /api/todos/:id - Get a single todo",
      "POST /api/todos - Create a new todo",
      "PUT /api/todos/:id - Update a todo",
      "DELETE /api/todos/:id - Delete a todo"
    ]
  });
});

// GET /api/todos - List all todos
app.get("/api/todos", (req: Request, res: Response): void => {
  res.json({
    success: true,
    data: todos,
    count: todos.length
  });
});

// GET /api/todos/:id - Get a single todo
app.get("/api/todos/:id", (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id)) {
    res.status(400).json({
      success: false,
      error: "Invalid todo ID. Must be a number."
    });
    return;
  }
  
  const todo = findTodoById(id);
  
  if (!todo) {
    res.status(404).json({
      success: false,
      error: "Todo not found"
    });
    return;
  }
  
  res.json({
    success: true,
    data: todo
  });
});

// POST /api/todos - Create a new todo
app.post("/api/todos", (req: Request, res: Response): void => {
  const validation = validateTodoData(req.body);
  
  if (!validation.isValid) {
    res.status(400).json({
      success: false,
      error: "Validation failed",
      details: validation.errors
    });
    return;
  }
  
  const newTodo: Todo = {
    id: nextId++,
    title: req.body.title.trim(),
    completed: req.body.completed || false,
    createdAt: new Date()
  };
  
  todos.push(newTodo);
  
  res.status(201).json({
    success: true,
    data: newTodo,
    message: "Todo created successfully"
  });
});

// PUT /api/todos/:id - Update a todo
app.put("/api/todos/:id", (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id)) {
    res.status(400).json({
      success: false,
      error: "Invalid todo ID. Must be a number."
    });
    return;
  }
  
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    res.status(404).json({
      success: false,
      error: "Todo not found"
    });
    return;
  }
  
  const validation = validateTodoData(req.body);
  
  if (!validation.isValid) {
    res.status(400).json({
      success: false,
      error: "Validation failed",
      details: validation.errors
    });
    return;
  }
  
  // Update the todo
  todos[todoIndex] = {
    ...todos[todoIndex],
    title: req.body.title.trim(),
    completed: req.body.completed !== undefined ? req.body.completed : todos[todoIndex].completed
  };
  
  res.json({
    success: true,
    data: todos[todoIndex],
    message: "Todo updated successfully"
  });
});

// DELETE /api/todos/:id - Delete a todo
app.delete("/api/todos/:id", (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id)) {
    res.status(400).json({
      success: false,
      error: "Invalid todo ID. Must be a number."
    });
    return;
  }
  
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    res.status(404).json({
      success: false,
      error: "Todo not found"
    });
    return;
  }
  
  const deletedTodo = todos.splice(todoIndex, 1)[0];
  
  res.json({
    success: true,
    data: deletedTodo,
    message: "Todo deleted successfully"
  });
});

// 404 handler
app.use("*", (req: Request, res: Response): void => {
  res.status(404).json({
    success: false,
    error: "Route not found"
  });
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: any): void => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: "Internal server error"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});