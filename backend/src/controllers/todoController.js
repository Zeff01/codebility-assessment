let { todos, todoId } = require("../data/store");

// List all todos
module.exports.getAllTodos = (req, res) => {
  if (todos.length === 0) {
    return res.status(200).json({ message: "Nothing to do here!" });
  }
  res.status(200).json(todos);
};

// Get a single todo
module.exports.getTodo = (req, res) => {
  const todo = todos.find((todo) => todo.id === req.params.id);
  if (todo) {
    return res.status(200).send(todo);
  } else {
    return res.status(404).send({ message: "Todo not found" });
  }
};

// Create a new todo
module.exports.addTodo = (req, res) => {
  let { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Todo title is required" });
  }

  const existingTodo = todos.find((todo) => todo.title === title);
  if (existingTodo) {
    return res.status(409).send({ message: "Todo already exists" });
  }

  let newTodo = {
    id: todoId(),
    title,
    completed: false,
    createdAt: new Date().toUTCString(),
  };

  todos.push(newTodo);
  res.status(201).json({ message: "Todo created successfully", todo: newTodo });
};

// Update a todo
module.exports.updateTodo = (req, res) => {
  const id = req.params.id;
  const { title, completed } = req.body;

  if (!title || completed === undefined) {
    return res.status(400).json({ message: "Title and status are required" });
  }

  const index = todos.findIndex((todo) => todo.id === id);
  if (index < 0) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const existingTodo = todos.find((todo) => todo.title === title);
  if (existingTodo && existingTodo.id !== id) {
    return res.status(409).send({ message: "Todo already exists" });
  }

  todos[index].title = title;
  todos[index].completed = completed;
  return res
    .status(200)
    .json({ message: "Todo updated successfully", todo: todos[index] });
};

// Delete a todo
module.exports.deleteTodo = (req, res) => {
  const index = todos.findIndex((todo) => todo.id === req.params.id);
  const deleteCount = 1;

  if (index < 0) {
    return res.status(404).json({ message: "Todo not found" });
  }
  todos.splice(index, deleteCount);
  return res.status(200).json({ message: "Todo deleted successfully" });
};
