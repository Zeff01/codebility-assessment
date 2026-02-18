let todos = [
  {
    id: 1,
    title: "Todo Number One",
    completed: false,
    createdAt: new Date("2026-02-15"),
  },
  {
    id: 2,
    title: "Number Two Todo",
    completed: true,
    createdAt: new Date("2026-02-16"),
  },
  {
    id: 3,
    title: "Third Todo",
    completed: false,
    createdAt: new Date("2026-02-17"),
  },
];

let currentId = 1;

const getAll = () => todos;

const getById = (id) => todos.find((t) => t.id === id);

const create = (data) => {
  const newTodo = {
    id: currentId++,
    title: data.title,
    completed: data.completed ?? false,
    createdAt: new Date(),
  };

  todos.push(newTodo);
  return newTodo;
};

const update = (id, data) => {
  const todo = getById(id);
  if (!todo) return null;

  if (data.title !== undefined) todo.title = data.title;
  if (data.completed !== undefined) todo.completed = data.completed;

  return todo;
};

const remove = (id) => {
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) return null;

  return todos.splice(index, 1)[0];
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
