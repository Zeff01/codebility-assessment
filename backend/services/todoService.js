// Array (Database Substitute)
const todos = [];

// Primary Key Substitute
let nextId = 0;

//Get all (READ)
export function getAll() {
  return todos;
}
//Get by ID (READ)
export function getById(id) {
  return todos.find((t) => t.id === id) || null;
}
//Post (CREATE)
export function create({ title, completed = false }) {
  const todo = {
    id: nextId++,
    title,
    completed: Boolean(completed),
    createdAt: new Date().toISOString(),
  };
  todos.push(todo);
  return todo;
}
//UPDATE
export function update(id, { title, completed }) {
  const todo = getById(id);
  if (!todo) return null;
  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = Boolean(completed);
  return todo;
}
//DELETE
export function remove(id) {
  const idx = todos.findIndex((t) => t.id === id);
  if (idx === -1) return null;
  return todos.splice(idx, 1)[0];
}
