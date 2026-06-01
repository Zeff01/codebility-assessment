const express = require("express");
const cors = require("cors");

const todoRoutes = require("./routes/todoRoutes");
const { notFoundHandler, errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Todo API is running",
    endpoints: {
      listTodos: "GET /api/todos",
      getTodo: "GET /api/todos/:id",
      createTodo: "POST /api/todos",
      updateTodo: "PUT /api/todos/:id",
      deleteTodo: "DELETE /api/todos/:id"
    }
  });
});

app.use("/api/todos", todoRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;