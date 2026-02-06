const express = require("express");
const validateTodo = require("../util/todoValidation");

const todoRoutes = express.Router({ mergeParams: true });

const todos = [];

// `GET /api/todos` - List all todos
todoRoutes.get("/", (req, res) => {
  if (todos.length === 0) {
    return res.status(404).json({ message: "No todos found" });
  }

  res.json(todos);
});

// `GET /api/todos/:id` - Get a single todo
todoRoutes.get("/:id", (req, res) => {
  const query = req.params.id;
  const todo = todos.find((todo) => todo.id === parseInt(query));

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(todo);
});

// `POST /api/todos` - Create a new todo
todoRoutes.post("/", (req, res) => {
  const validation = validateTodo(req.body, todos, "post");
  if (!validation.valid) {
    return res.status(400).json({ message: validation.message });
  }

  const { id, title, completed } = req.body;
  const createdAt = new Date().toISOString();
  const updatedAt = new Date().toISOString();
  const newTodo = { id, title, completed, createdAt, updatedAt };
  todos.push(newTodo);

  res.status(201).json(newTodo);
});

// `PUT /api/todos/:id` - Update a todo
todoRoutes.put("/:id", (req, res) => {
  const itemId = req.params.id;

  if (itemId !== req.body.id.toString()) {
    return res
      .status(400)
      .json({ message: "ID in the request URL must match the ID in the request body" });
  }

  const validation = validateTodo(req.body, todos, "put");
  if (!validation.valid) {
    return res.status(400).json({ message: validation.message });
  }

  const index = todos.findIndex((todo) => todo.id === parseInt(itemId));
  const { id, title, completed } = req.body;
  const updatedTodo = {
    id,
    title,
    completed,
    createdAt: todos[index].createdAt,
    updatedAt: new Date().toISOString(),
  };
  todos[index] = updatedTodo;
  res.json(updatedTodo);
});

// `DELETE /api/todos/:id` - Delete a todo
todoRoutes.delete("/:id", (req, res) => {
  const index = todos.findIndex((todo) => todo.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: "Todo with this ID does not exist" });
  }

  const deletedTodo = todos.splice(index, 1);
  res.json(deletedTodo[0]);
});

module.exports = todoRoutes;
