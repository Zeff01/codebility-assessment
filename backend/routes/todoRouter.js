import { Router } from "express"
import { validate, validateParams } from "../middleware/validationMiddleware.js"
import { editTodoSchema, todos, todoSchema } from "../models/todo.js"
import {
  createTodo,
  deleteTodo,
  editTodo,
  getTodo,
  getTodos,
} from "../controllers/todoController.js"

const router = Router()

router.route("/").get(getTodos).post(validate(todoSchema), createTodo)
router
  .route("/:id")
  .get(validateParams(todos), getTodo)
  .delete(validateParams(todos), deleteTodo)
  .put(validateParams(todos), validate(editTodoSchema), editTodo)

export default router
