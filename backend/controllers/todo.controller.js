import crypto from "crypto"; // crypto for generating unique IDs
import { todos } from "../data/todos.js";

// POST /api/todos - Create a new todo
export const createTodo = (req, res) => {
  const { title } = req.body;

  try {
    if (!title?.trim()) {
      return res.status(400).json({ message: "Title is required" });
    }

    const newTodo = {
      id: crypto.randomUUID(),
      title: title.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    todos.push(newTodo);

    return res.status(201).json({
      message: "Todo created successfully!",
      todo: newTodo,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error creating todo" });
  }
};

// GET /api/todos - Get all todos
export const getTodos = (req, res) => {
  try {
    res.status(200).json({
      message: "Todos fetched successfully",
      todos,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching todos" });
  }
};

// GET /api/todos/:id - Get a specific todo by ID
export const getTodoById = (req, res) => {
  const { id } = req.params;
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json({ message: `Details of todo with ID: ${req.params.id}`, todo });
};

// PUT /api/todos/:id - Update a specific todo by ID
export const updateTodo = (req, res) => {
  const { id } = req.params;
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  const { title, completed } = req.body;
  if (title !== undefined) {
    if (typeof title !== "string" || !title.trim()) {
      return res.status(400).json({ message: "Title is required" });
    }
    todo.title = title.trim();
  }
  if (completed !== undefined) {
    if (typeof completed === "boolean") {
      todo.completed = completed;
    } else if (completed === "true" || completed === "false") {
      todo.completed = completed === "true";
    } else {
      return res
        .status(400)
        .json({ message: "Invalid value for completed; must be a boolean or 'true'/'false' string" });
    }
  }
  res.json({
    message: `Todo with ID: ${req.params.id} updated successfully!`,
    todo,
  });
};

// DELETE /api/todos/:id - Delete a specific todo by ID
export const deleteTodo = (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex((t) => t.id === id);
  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }
  todos.splice(todoIndex, 1);
  res.json({ message: `Todo with ID: ${req.params.id} deleted successfully!` });
};
