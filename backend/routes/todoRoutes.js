import express from "express";
import { createTodo, listTodoById, listTodos, updateTodo, deleteTodo} from "../controllers/todoController.js";



const router = express.Router();

//get all
router.get("/", listTodos);

//get by id
router.get("/:id", listTodoById);

//create"
router.post("/", createTodo);

//update
router.put("/:id", updateTodo);

//delete
router.delete("/:id", deleteTodo);



export default router;