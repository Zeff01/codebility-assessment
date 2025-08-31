import { Todo, CreateTodoRequest, UpdateTodoRequest } from "../types/todo";

// In-memory storage for todos
let todos: Todo[] = [];
let currentId = 1;

export const TodoModel = {
  // Get all todos
  findAll: (): Todo[] => {
    return todos;
  },

  // Get a todo by ID
  findById: (id: string): Todo | undefined => {
    return todos.find((todo) => todo.id === id);
  },

  // Create a new todo
  create: (todoData: CreateTodoRequest): Todo => {
    const newTodo: Todo = {
      id: String(currentId++),
      title: todoData.title,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    todos.push(newTodo);
    return newTodo;
  },

  // Update an existing todo
  update: (id: string, todoData: UpdateTodoRequest): Todo | undefined => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) return undefined;

    todos[todoIndex] = {
      ...todos[todoIndex],
      ...todoData,
      updatedAt: new Date(),
    };

    return todos[todoIndex];
  },

  // Delete a todo
  delete: (id: string): boolean => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) return false;

    todos.splice(todoIndex, 1);
    return true;
  },
};
