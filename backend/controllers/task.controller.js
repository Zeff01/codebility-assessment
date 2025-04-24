const { asyncHandler } = require("../middlewares/asyncHandler");
const ErrorResponse = require("../utils/ErrorResponse");

let tasks = [];

const getAllTasks = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    code: 200,
    message: "Task fetched successfully",
    data: tasks,
  });
});

const createTask = asyncHandler(async (req, res, next) => {
  const { title } = req.body;

  if (!title) return next(new ErrorResponse(400, "Please add a title"));

  const newTask = {
    id: Math.floor(Math.random() * 10000),
    title: title,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);

  res.status(201).json({
    code: 201,
    message: "Task created successfully",
    data: newTask,
  });
});

const getTaskById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const taskFound = tasks.find((task) => task.id === parseInt(id));
  if (!taskFound) return next(new ErrorResponse(404, "Task not found"));

  res.status(200).json({
    code: 200,
    message: "Task fetched successfully",
    data: taskFound,
  });
});

const updateTask = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const taskFound = tasks.find((task) => task.id === parseInt(id));
  if (!taskFound) return next(new ErrorResponse(404, "Task not found"));

  if (title) taskFound.title = title;
  if (completed !== undefined) taskFound.completed = completed;

  res.status(200).json({
    code: 200,
    message: "Task updated successfully",
    data: taskFound,
  });
});

const deleteTask = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
  if (taskIndex === -1) return next(new ErrorResponse(404, "Task not found"));

  tasks.splice(taskIndex, 1);

  res.status(200).json({
    code: 200,
    message: "Task deleted successfully",
    data: null,
  });
});

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
