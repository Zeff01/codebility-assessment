const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

//import route
const todoRoute = require("./routes/todo.route");

//to use json format
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

//use the todo route
app.use("/api/todos", todoRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
