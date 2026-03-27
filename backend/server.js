// todo API

const express = require("express");
const app = express();
const PORT = process.env.PORT || 10533;
const todoRoutes = require("./routes/todos.js");

app.use(express.json());

app.use("/api/todos", todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
