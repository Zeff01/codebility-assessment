import express from "express"
import { addTodo, deleteTodo, getAllTodo, getTodoById, updateTodo } from "./todo.controller.js";

const router = express.Router();

router.get("/", getAllTodo); // list all todos
router.get("/:id", getTodoById); // get todo by id
router.post("/", addTodo); // add todo
router.put("/:id", updateTodo) // update todo
router.delete("/:id", deleteTodo) // delete todo


export default router;