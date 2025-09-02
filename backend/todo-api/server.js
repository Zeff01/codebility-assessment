const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todos");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

//  Welcome route at root
app.get("/", (req, res) => {
  res.send(`
    <h1>Todo API</h1>
    <p>Welcome! Your API is running.</p>
    <p>Available endpoints:</p>
    <ul>
      <li>GET /api/todos - List all todos</li>
      <li>GET /api/todos/:id - Get a single todo</li>
      <li>POST /api/todos - Create a new todo</li>
      <li>PUT /api/todos/:id - Update a todo</li>
      <li>DELETE /api/todos/:id - Delete a todo</li>
    </ul>
  `);
});

// Routes
app.use("/api/todos", todoRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
