import { Router } from "express";
import {
  CreateTodo,
  DeleteTodo,
  getAllTodos,
  GetTodoById,
  RootController,
  UpdateTodo,
} from "./controllers";

const router = Router();

router.get("/", RootController);

router.get("/todos", getAllTodos);

router.get("/todos/:id", GetTodoById);

router.post("/todos", CreateTodo);

router.put("/todos/:id", UpdateTodo);

router.delete("/todos/:id", DeleteTodo);

export default router;
