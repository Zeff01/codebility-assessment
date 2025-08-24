import { Router } from "express";

import { TodoController } from "../controllers/todo-controller.js";
import { TodoService } from "../services/todo-service.js";
import { TodoRepository } from "../repository/todo-repository.js";

// Initialize router
export const todoRouter = Router();

// Initialize repositories and services
const todoRepository = new TodoRepository();
const todoService = new TodoService(todoRepository);
const todoController = new TodoController(todoService);

// Define routes
todoRouter.post("/", todoController.create);
todoRouter.get("/", todoController.getAll);
todoRouter.get("/:id", todoController.getById);
todoRouter.put("/:id", todoController.update);
todoRouter.delete("/:id", todoController.delete);

// Export router
export default todoRouter;
