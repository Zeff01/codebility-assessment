import todos from "../data/todos.js";
import generateId from "../utils/generatedId.js";

const getTodos = (req, res) => {
  try {
    const todoList = todos.map((todo) => ({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      createdAt: todo.createdAt,
    }));

    return res.status(200).json({
      success: true,
      data: todoList,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getTodoById = (req, res) => {
  try {
    const { id } = req.params;

    const todo = todos.find((todo) => todo.id === id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createTodo = (req, res) => {
  try {
    const { id, title, completed, createdAt } = req.body;

    if (
      typeof title !== "string" ||
      typeof createdAt !== "string" ||
      typeof completed !== "boolean"
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid input. 'id', 'title', and 'createdAt' must be strings, and 'completed' must be a boolean.",
      });
    }

    if (!title || completed === undefined || !createdAt) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    const todo = {
      id: generateId(),
      title,
      completed,
      createdAt,
    };

    todos.push(todo);

    return res.status(201).json({
      success: true,
      message: "Todo created successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateTodo = (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Missing required field: id",
      });
    }

    const todo = todos.find((todo) => todo.id === id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    if (title !== undefined && typeof title !== "string") {
      return res.status(400).json({
        success: false,
        message: "'title' must be a string.",
      });
    }

    if (completed !== undefined && typeof completed !== "boolean") {
      return res.status(400).json({
        success: false,
        message: "'completed' must be a boolean.",
      });
    }

    if (title !== undefined) {
      todo.title = title;
    }

    if (completed !== undefined) {
      todo.completed = completed;
    }

    return res.status(200).json({
      success: true,
      message: "Todo updated successfully.",
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteTodo = (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Missing required field: id",
      });
    }

    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    todos.splice(todoIndex, 1);

    return res.status(200).json({
      success: true,
      message: "Todo deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
