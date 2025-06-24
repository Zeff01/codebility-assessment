import express from "express";
import todoRoutes from './routes/todo.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.json({
    message: "TODO API Server",
    endpoints: {
      "GET /api/todos": "List all todos",
      "GET /api/todos/:id": "Get a single todo",
      "POST /api/todos": "Create a new todo",
      "PUT /api/todos/:id": "Update a todo",
      "DELETE /api/todos/:id": "Delete a todo"
    }
  });
});

// API Routes
app.use('/api/todos', todoRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// Handle 404 for unknown routes
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
  console.log(`API endpoints available at http://localhost:${PORT}/api/todos`);
});
