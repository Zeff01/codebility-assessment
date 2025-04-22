const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const todoRoutes = require("./routes/todos");

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Mount todo routes
app.use("/api/todos", todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
