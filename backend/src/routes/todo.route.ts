import todosController from "../controllers/todo.controller";

const express = require("express");
const router = express.Router();


router.get("/", todosController.getAllTodos);
router.get("/:id", todosController.getOneTodo);
router.post("/", todosController.createNewTodo);
router.put("/:id", todosController.updateTodo);
router.delete("/:id", todosController.deleteTodo);

export default router;