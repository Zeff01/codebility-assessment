import express from "express";
import {
  createTodo,
  deleteTodoById,
  getAllTodo,
  getTodoById,
  updateTodo,
} from "../controllers/todosControllers.js";

const TodosRoutes = express.Router();

TodosRoutes.route("/").get(getAllTodo).post(createTodo);
TodosRoutes.route("/:id")
  .get(getTodoById)
  .put(updateTodo)
  .delete(deleteTodoById);

export default TodosRoutes;
