// stored here
let list = [
  {
    id: 1,
    title: "Testing1",
    completed: false,
    createdAt: Date.now(),
  },
];

// all todo
const getTodos = (req, res) => {
  res.status(200).json(list);
};

// get a todo by id
const getTodo = (req, res) => {

    const id = Number(req.params.id);
    const todo = list.find((list) => list.id === id);

    if (!todo) {
      return res.status(400).json({ message: "Todo not found" });
    }
    res.status(200).json(todo);
  }


// new todo
const createTodos = (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ message: "Title required" });
  }
  const newTodo = {
    id: list.length + 1,
    title: req.body.title,
    completed: false,
    createdAt: Date.now(),
  };
  list.push(newTodo);
  res.status(201).json(newTodo);
};

// update
const updateTodo = (req, res) => {
    const id = Number(req.params.id);
    const todo = list.find((list) => list.id === id);
    if (!todo) {
      return res.status(404).json({ message: "Cannot find a ToDo list" });
    }
    if (req.body.title !== undefined) {
      todo.title = req.body.title;
    }

    if (req.body.completed !== undefined) {
      todo.completed = req.body.completed;
    }
    res.status(200).json(todo);
};

// delete
const deleteTodo = (req, res) => {
  const id = Number(req.params.id);
  const index = list.findIndex(list => list.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const deleted = list.splice(index, 1)[0];

  res.status(200).json(deleted);
};

module.exports = { getTodos, getTodo, createTodos, updateTodo, deleteTodo };
