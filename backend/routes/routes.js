const express = require("express");
const { getTodos, getTodoById, createTodo, updateTodo, deleteTodo } = require("../controllers/controllers");

const router = express.Router();

//Create Router list js and exported Controllers functions.

router.get("/", getTodos);
router.post("/", createTodo);
router.get("/:id", getTodoById);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;