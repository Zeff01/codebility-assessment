const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

// Parse JSON
app.use(express.json());

let todos = [];
let nextId = 1;

// Helper function to find todo by id
const findTodo = (id) => {
  return todos.find(todo => todo.id === parseInt(id));
};

// Add a new todo
app.post('/todos', (req, res) => {
  try {
    const { title, description, completed } = req.body;

    // Validate input
    if (!title || !title.trim()) {
      return res.status(400).json({ error: 'Title is required' });
    }

    // Create new todo
    const todo = {
      id: nextId++,
      title: title.trim(),
      description: description ? description.trim() : '',
      completed: completed || false,
      createdAt: new Date().toISOString()
    };

    todos.push(todo);
    res.status(201).json(todo);

  } catch (error) {
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
});

// Get all todos
app.get('/todos', (req, res) => {
  try {
    // Optional filtering by completion status
    const { completed } = req.query;

    if (completed !== undefined) {
      const isCompleted = completed === 'true';
      const filteredTodos = todos.filter(todo => todo.completed === isCompleted);
      return res.json(filteredTodos);
    }

    res.json(todos);

  } catch (error) {
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
});

// Get a single todo by ID
app.get('/todos/:id', (req, res) => {
  try {
    const todo = findTodo(req.params.id);

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.json(todo);

  } catch (error) {
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
});

// Update a todo by ID
app.put('/todos/:id', (req, res) => {
  try {
    const todo = findTodo(req.params.id);

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    const { title, description, completed } = req.body;

    // Validate title if provided
    if (title !== undefined && (!title || !title.trim())) {
      return res.status(400).json({ error: 'Title cannot be empty' });
    }

    // Update fields
    if (title !== undefined) todo.title = title.trim();
    if (description !== undefined) todo.description = description.trim();
    if (completed !== undefined) todo.completed = completed;
    todo.updatedAt = new Date().toISOString();

    res.json(todo);

  } catch (error) {
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
});

// Partially update a todo by ID
app.patch('/todos/:id', (req, res) => {
  try {
    const todo = findTodo(req.params.id);

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    const { title, description, completed } = req.body;

    // Validate title if provided
    if (title !== undefined && (!title || !title.trim())) {
      return res.status(400).json({ error: 'Title cannot be empty' });
    }

    // Update only provided fields
    if (title !== undefined) todo.title = title.trim();
    if (description !== undefined) todo.description = description.trim();
    if (completed !== undefined) todo.completed = completed;
    todo.updatedAt = new Date().toISOString();

    res.json(todo);

  } catch (error) {
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
});

// Delete a todo by ID
app.delete('/todos/:id', (req, res) => {
  try {
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(req.params.id));

    if (todoIndex === -1) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    const deletedTodo = todos.splice(todoIndex, 1)[0];
    res.json({ message: 'Todo deleted successfully', todo: deletedTodo });

  } catch (error) {
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
});

// Delete all todos
app.delete('/todos', (req, res) => {
  try {
    const count = todos.length;
    todos = [];
    nextId = 1;
    res.json({ message: `Deleted ${count} todos successfully` });

  } catch (error) {
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
});


// Error handling for invalid JSON
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON' });
  }
  next();
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Todo API server is running on port ${PORT}`);
  console.log(`\nAvailable endpoints:`);
  console.log(`  POST   /todos        - Create a new todo`);
  console.log(`  GET    /todos        - Get all todos`);
  console.log(`  GET    /todos/:id    - Get a todo by ID`);
  console.log(`  PUT    /todos/:id    - Update a todo by ID`);
  console.log(`  PATCH  /todos/:id    - Partially update a todo`);
  console.log(`  DELETE /todos/:id    - Delete a todo by ID`);
  console.log(`  DELETE /todos        - Delete all todos`);
});

module.exports = app;