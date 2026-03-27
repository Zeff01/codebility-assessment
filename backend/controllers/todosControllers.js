const todos = require("../data/data.js");

// gets all todo items
exports.getAllTodos = (req, res) => {
  res.json(todos);
};

// gets a todo item by id
exports.getTodoById = (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }
  const todo = todos.find((t) => {
    return t.id === id;
  });

  if (!todo) {
    return res.status(400).json({ message: "Todo not found" });
  }

  res.json(todo);
};

// creates a new todo item
exports.createTodo = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(404).json({ message: "Title is required" });
  }

  const date = new Date();
  const newTodo = {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    title: title,
    completed: false,
    createdAt: date.toLocaleDateString("en-US"),
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// updates the todo item
exports.updateTodoById = (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  const todo = todos.find((t) => {
    return t.id === id;
  });

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const { title, completed } = req.body;

  //updates todo Item if values are provided
  if (title !== undefined) {
    todo.title = title;
  }
  if (completed !== undefined) {
    if (typeof completed !== "boolean") {
      // validation if completed is boolean
      return res.status(400).json({ message: "Completed must be boolean" });
    }
    todo.completed = completed;
  }
  res.json(todo);
};

// deletes todo item by id
exports.deleteTodoById = (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }
  const todoIndex = todos.findIndex((t) => {
    return t.id === id;
  });

  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const deletedTodo = todos.splice(todoIndex, 1);

  res.json({
    message: "Deleted Todo successfully.",
    todo: deletedTodo[0],
  });
};
