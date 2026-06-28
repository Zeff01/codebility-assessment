// file: index.js

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const todosRoutes = require('./routes/todos');
app.use(express.json()) // lets us read JSON from req.body

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// all todo routes under /api/todos
app.use('/api/todos', todosRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
