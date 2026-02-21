const express = require("express");
const app = express();

const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());
app.use("/api/todos", todoRoutes);

module.exports = app;