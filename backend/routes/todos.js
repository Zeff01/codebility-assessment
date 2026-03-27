const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodoById,
  deleteTodoById,
} = require("../controllers/todosControllers.js");

router.get("/", getAllTodos);

router.get("/:id", getTodoById);

router.post("/", createTodo);

router.put("/:id", updateTodoById);

router.delete("/:id", deleteTodoById);

module.exports = router;
