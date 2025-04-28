const todoFunctions = require("../models/todo.models");
const {
  generateTimestamp,
  generateReferenceNo,
} = require("../helpers/generator");

exports.getToDo = async function (req, res) {
  try {
    const todoList = await todoFunctions.fetchToDo();
    res.status(todoList.statusCode).json(todoList);
  } catch (error) {
    res.status(500).json({
      error: "Server Error",
      message: error,
    });
  }
};

exports.getToDoByID = async function (req, res) {
  const { id } = req.params;
  console.log(id);

  try {
    const todoList = await todoFunctions.fetchToDoByID(parseInt(id));
    res.status(todoList.statusCode).json(todoList);
  } catch (error) {
    res.status(500).json({
      error: "Server Error",
      message: error,
    });
  }
};

exports.addToDo = async function (req, res) {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Missing or Invalid Fields",
      });
    }

    const data = {
      id: parseInt(generateReferenceNo()),
      title,
      completed: false,
      createdAt: generateTimestamp(),
    };

    const todoList = await todoFunctions.addToDo(data);
    res.status(todoList.statusCode).json(todoList);
  } catch (error) {
    res.status(500).json({
      error: "Server Error",
      message: error,
    });
  }
};

exports.updateToDo = async function (req, res) {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    if (!title || typeof completed !== "boolean") {
      return res.status(400).json({
        success: false,
        message: "Missing or Invalid Fields",
      });
    }

    const data = {
      id,
      title,
      completed,
    };
    const todoList = await todoFunctions.updateToDoByID(data);
    res.status(todoList.statusCode).json(todoList);
  } catch (error) {
    res.status(500).json({
      error: "Server Error",
      message: error,
    });
  }
};

exports.deleteToDoByID = async function (req, res) {
  const { id } = req.params;
  console.log(id);

  try {
    const todoList = await todoFunctions.deleteToDoByID(parseInt(id));
    res.status(todoList.statusCode).json(todoList);
  } catch (error) {
    res.status(500).json({
      error: "Server Error",
      message: error,
    });
  }
};
