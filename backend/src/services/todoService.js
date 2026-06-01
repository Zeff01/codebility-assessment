let todos = [];
let nextId = 1;

function getAllTodos() {
  return todos;
}

function getTodoById(id) {
  return todos.find((todo) => todo.id === Number(id));
}

function createTodo(data) {
  const newTodo = {
    id: nextId++,
    title: data.title.trim(),
    completed: data.completed ?? false,
    createdAt: new Date().toISOString()
  };

  todos.push(newTodo);

  return newTodo;
}

function updateTodo(id, data) {
  const todo = getTodoById(id);

  if (!todo) {
    return null;
  }

  if (data.title !== undefined) {
    todo.title = data.title.trim();
  }

  if (data.completed !== undefined) {
    todo.completed = data.completed;
  }

  return todo;
}

function deleteTodo(id) {
  const todoIndex = todos.findIndex((todo) => todo.id === Number(id));

  if (todoIndex === -1) {
    return null;
  }

  const deletedTodo = todos.splice(todoIndex, 1)[0];

  return deletedTodo;
}

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
};