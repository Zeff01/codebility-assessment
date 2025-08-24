import { CreateTodo, Todo } from "../types/todo";

export class TodoRepository {
  private todos: Todo[] = [];

  // Create a todo
  createTodo(data: Partial<CreateTodo>): Todo {
    // Check if the data is valid
    if (typeof data.title !== "string") {
      throw new Error("Invalid data: title is required and must be a string");
    }

    // Create the todo
    const todo: Todo = {
      id: this.todos.length + 1,
      title: data.title,
      completed: false,
      createdAt: new Date(),
    };

    // Add the todo to the list
    this.todos.push(todo);
    return todo;
  }

  // Get all todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Get a todo by id
  getTodoById(id: number): Todo | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  // Delete a todo
  deleteTodo(id: number): boolean {
    const initialLength = this.todos.length;
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return this.todos.length !== initialLength;
  }

  // Update a todo
  updateTodo(id: number, data: Partial<Todo>): Todo | undefined {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    // Check if the todo exists
    if (todoIndex === -1) {
      return undefined;
    }

    // Update the todo
    this.todos[todoIndex] = {
      ...this.todos[todoIndex],
      ...data,
      id: this.todos[todoIndex].id, // Preserve the original id
      createdAt: this.todos[todoIndex].createdAt, // Preserve the original creation date
      completed: typeof data.completed === "boolean" ? data.completed : false,
    };

    return this.todos[todoIndex];
  }
}
