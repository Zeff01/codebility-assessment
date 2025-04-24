const express = require("express");

const taskRoutes = require("./routes/task.routes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/todos", taskRoutes);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Server Error",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
