import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, 'todos.json');

async function readTodos() {
  try {
    const content = await fs.readFile(dataFile, 'utf8');
    return JSON.parse(content);
  } catch (err) {
    
    return [];
  }
}

async function writeTodos(todos) {
  await fs.writeFile(dataFile, JSON.stringify(todos, null, 2), 'utf8');
}

export async function getTodos() {
  return await readTodos();
}

export async function getTodoById(id) {
  const todos = await readTodos();
  return todos.find(t => t.id === id);
}

export async function addTodo(todo) {
  const todos = await readTodos();
  todos.push(todo);
  await writeTodos(todos);
  return todo;
}

export async function updateTodoById(id, updates) {
  const todos = await readTodos();
  const idx = todos.findIndex(t => t.id === id);
  if (idx === -1) return null;
  todos[idx] = { ...todos[idx], ...updates };
  await writeTodos(todos);
  return todos[idx];
}

export async function deleteTodoById(id) {
  const todos = await readTodos();
  const idx = todos.findIndex(t => t.id === id);
  if (idx === -1) return false;
  todos.splice(idx, 1);
  await writeTodos(todos);
  return true;
}
