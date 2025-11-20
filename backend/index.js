const express = require("express");
const cors = require("cors");
const Todoroute = require('./routes/todos.js');

const app = express();
const PORT = process.env.PORT || 4000;


// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/todos', Todoroute);

// Health Check Endpoint to check if the API is running properly
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'API is running properly' });

});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Todo API',
    endpoints: {
      'GET /api/todos': 'List all todos',
      'GET /api/todos/:id': 'Get a single todo by ID',
      'POST /api/todos': 'Create a new todo',
      'PUT /api/todos/:id': 'Update a todo by ID',
      'DELETE /api/todos/:id': 'Delete a todo by ID'
    }
  });
});

// 404 Error Handler for undefiend routes
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route Not Found', 
    message: `The route ${req.originalUrl} does not exist on this server.`
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
