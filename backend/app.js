const express = require("express");
const todoRoutes = require("./routes/todo.routes");

const app = express();

app.use(express.json());

app.use("/api/todos", todoRoutes);

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error" });
});

module.exports = app;
