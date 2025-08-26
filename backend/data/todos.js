let todos = [];
let currentId = 1;

function getTodos() {
  return todos;
}

function getTodoById(id) {
  return todos.find(todo => todo.id === id);
}

function createTodo(title) {
  const newTodo = {
    id: currentId++,
    title,
    completed: false,
    createdAt: new Date().toISOString()
  };
  todos.push(newTodo);
  return newTodo;
}

function updateTodo(id, data) {
  const todo = getTodoById(id);
  if (!todo) return null;

  if (typeof data.title === "string") todo.title = data.title;
  if (typeof data.completed === "boolean") todo.completed = data.completed;
  return todo;
}

function deleteTodo(id) {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) return todos.splice(index, 1)[0];
  return null;
}

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
};
  