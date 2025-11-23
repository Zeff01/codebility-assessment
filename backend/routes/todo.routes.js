const express = require("express");
const controller = require("../controllers/todo.controller");

const router = express.Router();

router.get("/", controller.getAllTodos);
router.get("/:id", controller.getTodoById);
router.post("/", controller.createTodo);
router.put("/:id", controller.updateTodo);
router.delete("/:id", controller.deleteTodo);

module.exports = router;
