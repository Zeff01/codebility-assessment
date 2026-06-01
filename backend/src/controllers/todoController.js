const todoService = require("../services/todoService");
const { isValidTitle, isValidCompleted } = require("../utils/validators");

function getAllTodos(req, res) {
  const todos = todoService.getAllTodos();

  res.status(200).json({
    success: true,
    count: todos.length,
    data: todos
  });
}

function getTodoById(req, res) {
  const todo = todoService.getTodoById(req.params.id);

  if (!todo) {
    return res.status(404).json({
      success: false,
      message: "Todo not found"
    });
  }

  res.status(200).json({
    success: true,
    data: todo
  });
}

function createTodo(req, res) {
  const { title, completed } = req.body;

  if (!isValidTitle(title)) {
    return res.status(400).json({
      success: false,
      message: "Title is required and must be a non-empty string"
    });
  }

  if (completed !== undefined && !isValidCompleted(completed)) {
    return res.status(400).json({
      success: false,
      message: "Completed must be a boolean"
    });
  }

  const todo = todoService.createTodo({
    title,
    completed
  });

  res.status(201).json({
    success: true,
    message: "Todo created successfully",
    data: todo
  });
}

function updateTodo(req, res) {
  const { title, completed } = req.body;

  if (title !== undefined && !isValidTitle(title)) {
    return res.status(400).json({
      success: false,
      message: "Title must be a non-empty string"
    });
  }

  if (completed !== undefined && !isValidCompleted(completed)) {
    return res.status(400).json({
      success: false,
      message: "Completed must be a boolean"
    });
  }

  const updatedTodo = todoService.updateTodo(req.params.id, {
    title,
    completed
  });

  if (!updatedTodo) {
    return res.status(404).json({
      success: false,
      message: "Todo not found"
    });
  }

  res.status(200).json({
    success: true,
    message: "Todo updated successfully",
    data: updatedTodo
  });
}

function deleteTodo(req, res) {
  const deletedTodo = todoService.deleteTodo(req.params.id);

  if (!deletedTodo) {
    return res.status(404).json({
      success: false,
      message: "Todo not found"
    });
  }

  res.status(200).json({
    success: true,
    message: "Todo deleted successfully",
    data: deletedTodo
  });
}

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
};