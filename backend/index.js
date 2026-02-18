const express = require("express");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

// ---- Middleware ----
app.use(express.json()); // Parse JSON request bodies

// ---- Routes ----
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.use("/api/todos", todoRoutes);

// ---- 404 Handler (unmatched routes) ----
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ---- Global Error Handler ----
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// ---- Start Server ----
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});

module.exports = app;