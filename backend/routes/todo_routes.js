const express = require("express");
const router = express.Router();

const { v4: uuid } = require("uuid");

// Used Array for simplistic sake
const todos = [];

// READ All Todo
router.get("/todos", (req, res, next) => {
  res.json(todos);
});

// READ One Todo
router.get("/todos/:id", (req, res, next) => {
  try {
    const id = req.params.id;
    const findTodo = todos.find((t) => t.id === id);

    if (!findTodo) {
      return next({ statusCode: 404, message: "Todo not found" });
    }
    res.json(findTodo);
  } catch (err) {
    next(err);
  }
});

// CREATE Todo
router.post("/todos", async (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title) return next({ statusCode: 400, message: "Title is required" });

    const todo = {
      id: uuid(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    todos.push(todo);
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
});

// UPDATE Todo
router.put("/todos/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const findTodo = todos.find((t) => t.id === id);

    if (!findTodo) return next({ statusCode: 404, message: "Todo not found" });
    const { title } = req.body;
    if (title !== undefined) findTodo.title = title;

    res.json(findTodo);
  } catch (err) {
    next(err);
  }
});

// DELETE Todo
router.delete("/todos/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const findTodo = todos.findIndex((t) => t.id === id);

    if (findTodo === -1) return next({ statusCode: 404, message: "Todo not found" });

    const deleteTodo = todos.splice(findTodo, 1);
    res.json(deleteTodo[0]);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
