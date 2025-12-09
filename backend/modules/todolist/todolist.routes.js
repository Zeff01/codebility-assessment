const express = require('express');
const {createTodoList, createTodoListSchema} = require('./controllers/createTodo');
const queryTodoList = require('./controllers/queryTodo');
const getTodoByIdList = require('./controllers/getTodoById');
const {updateTodoList,updateTodoListSchema} = require('./controllers/updateTodo');
const deleteTodoList = require('./controllers/deleteTodo');
const validate = require('../../middlewares/validate');

const todoListRouter = express.Router();

//Routes
todoListRouter.post("/", validate(createTodoListSchema),createTodoList);

// GET /api/todos
todoListRouter.get("/", queryTodoList);

// GET /api/todos/:id
todoListRouter.get("/:id", getTodoByIdList);

//PUT /api/todos/:id
todoListRouter.put("/:id",validate(updateTodoListSchema),updateTodoList);

// DELETE /api/todos/:id
todoListRouter.delete("/:id", deleteTodoList);

module.exports = todoListRouter;