const { validationResult } = require("express-validator");
const { getDataStore } = require("../models/todoModel");

// Controller to fetch all list of todos
exports.todoList = (req, res) => {
  // Add try catch block for potential json serialization issues
  try {
    const data = getDataStore();
    /// Should be:
    if (!data || !Array.isArray(data)) {
      return res.status(500).json({ error: "Data store unavailable" });
    }
    if (data.length === 0) {
      return res.status(200).json([]); // return empty array
    }

    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({
      error: "Internal Server Error",
      details: e.message,
    });
  }
};

// Controller to fetch single todo
exports.getTodo = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "ID parameter is required" });
  }

  try {
    let todoIndex = -1;
    const data = getDataStore();
    if (!data || !Array.isArray(data)) {
      return res.status(500).json({ error: "Data store is not available" });
    }

    data.forEach((todo, index) => {
      if (todo.id === Number(id)) {
        todoIndex = index;
      }
    });

    if (todoIndex < 0) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json(data[todoIndex]);
  } catch (e) {
    return res.status(500).json({
      error: "Internal Server Error",
      details: e.message,
    });
  }
};

// Controller to create new Todo
exports.createTodo = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const { title, completed } = req.body;

  try {
    const data = getDataStore();

    if (!data || !Array.isArray(data)) {
      return res.status(500).json({ error: "Data store is not available" });
    }

    const newTodo = {
      id: data.length === 0 ? 1 : Math.max(...data.map((todo) => todo.id)) + 1, // generate new id
      title,
      completed,
    };

    data.push(newTodo); // push new todo to data store
    return res.status(201).json(newTodo);
  } catch (e) {
    return res.status(500).json({
      error: "Internal Server Error",
      details: e.message,
    });
  }
};

// Controller to update Todo
exports.updateTodo = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  const { id } = req.params;
  const { title, completed } = req.body;

  if (!id) {
    return res.status(400).json({ message: "ID parameter is required" });
  }

  try {
    const data = getDataStore();
    let todoIndex = -1;
    const updateData = {
      title,
      completed,
    };

    if (!data || !Array.isArray(data)) {
      return res.status(500).json({ error: "Data store is not available" });
    }

    data.forEach((todo, index) => {
      if (todo.id === Number(id)) {
        todoIndex = index;
      }
    });

    if (todoIndex < 0) {
      return res.status(404).json({ message: "Todo not found" });
    }

    data[todoIndex] = { ...data[todoIndex], ...updateData };
    res.status(200).json({ message: "Updated data", updateData });
  } catch (e) {
    return res.status(500).json({
      error: "Internal Server Error",
      details: e.message,
    });
  }
};

// Controller to delete a Todo
exports.deleteTodo = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "ID parameter is required" });
  }

  try {
    const data = getDataStore();
    if (!data || !Array.isArray(data)) {
      return res.status(500).json({ error: "Data store is not available" });
    }

    const todoIndex = data.findIndex((todo) => todo.id === Number(id));

    if (todoIndex === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    const deleteTodo = data.splice(todoIndex, 1);
    return res.status(200).json({ message: "Todo deleted", todo: deleteTodo[0] });
  } catch (e) {
    return res.status(500).json({
      error: "Internal Server Error",
      details: e.message,
    });
  }
};
