import fs from 'fs';
import path from 'path';

export interface Todo {
  id: string;
  userId: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const TODOS_FILE = path.join(DATA_DIR, 'todos.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initialize todos file if it doesn't exist
if (!fs.existsSync(TODOS_FILE)) {
  fs.writeFileSync(TODOS_FILE, JSON.stringify([]));
}

function readTodos(): Todo[] {
  try {
    const data = fs.readFileSync(TODOS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading todos:', error);
    return [];
  }
}

function writeTodos(todos: Todo[]): void {
  try {
    fs.writeFileSync(TODOS_FILE, JSON.stringify(todos, null, 2));
  } catch (error) {
    console.error('Error writing todos:', error);
  }
}

export function getTodosByUserId(userId: string): Todo[] {
  const todos = readTodos();
  return todos.filter((todo) => todo.userId === userId);
}

export function createTodo(userId: string, title: string): Todo {
  const todos = readTodos();
  const newTodo: Todo = {
    id: String(Date.now()),
    userId,
    title,
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  todos.push(newTodo);
  writeTodos(todos);
  return newTodo;
}

export function updateTodo(id: string, userId: string, updates: Partial<Todo>): Todo | null {
  const todos = readTodos();
  const index = todos.findIndex((todo) => todo.id === id && todo.userId === userId);
  
  if (index === -1) return null;
  
  todos[index] = {
    ...todos[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  
  writeTodos(todos);
  return todos[index];
}

export function deleteTodo(id: string, userId: string): boolean {
  const todos = readTodos();
  const filteredTodos = todos.filter((todo) => !(todo.id === id && todo.userId === userId));
  
  if (filteredTodos.length === todos.length) return false;
  
  writeTodos(filteredTodos);
  return true;
}
