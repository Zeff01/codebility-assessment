const express = require("express");
const asyncHandler = require("express-async-handler");
const todoController = require("../controllers/todoController");

const router = express.Router();

router.get("/", asyncHandler(todoController.getAllTodos));
router.get("/:id", asyncHandler(todoController.getTodoById));
router.post("/", asyncHandler(todoController.createTodo));
router.put("/:id", asyncHandler(todoController.updateTodo));
router.delete("/:id", asyncHandler(todoController.deleteTodo));

module.exports = router;
