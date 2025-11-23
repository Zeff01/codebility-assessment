const express = require("express");
const router = express.Router();

//import todo controller
const {getAllTodos, getTodoById, addTodo, updateTodoById, deleteTodoById} = require("../controllers/todo.controller");

//    - `GET /api/todos` - List all todos
router.get("/", getAllTodos);

//    - `GET /api/todos/:id` - Get a single todo
router.get("/:id", getTodoById);

//    - `POST /api/todos` - Create a new todo
router.post("/", addTodo);

//    - `PUT /api/todos/:id` - Update a todo
router.put("/:id", updateTodoById);

//    - `DELETE /api/todos/:id` - Delete a todo
router.delete("/:id", deleteTodoById);

module.exports = router;