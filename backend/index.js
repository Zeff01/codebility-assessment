const express = require("express");
const todoRoutes = require("./src/routes/todos.js");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Todo routes
app.use("/api/todos", todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
