const express = require("express");
const app = express();
const helmet = require("helmet");
const { xss } = require("express-xss-sanitizer");
const PORT = process.env.PORT || 8000;
const todosRoute = require("./src/routes/Todos.routes");

// Middleware
app.use(express.json());
app.use(helmet()); // sets secure headers
app.use(xss()); // sanitizes user input

// Routes
app.use("/v1", todosRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
