import express from "express";
import { createTodo, getTodos, getTodoById, updateTodo, deleteTodo } from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/todos", createTodo);
router.get("/todos", getTodos);
router.get("/todos/:id", getTodoById);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

export default router;