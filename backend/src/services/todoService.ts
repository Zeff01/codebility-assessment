import { Todo, CreateTodoRequest, UpdateTodoRequest } from "../types/todo";
/**
 * TodoService handles all business logic for todo operations
 * Uses in-memory storage
 */
class TodoService {
  private todos: Map<string, Todo> = new Map();

  /**
   * Get all todos with pagination
   * @param limit - Maximum number of todos to return (default: 20)
   * @param offset - Number of todos to skip (default: 0)
   */
  getAllTodos(limit: number = 20, offset: number = 0): { todos: Todo[]; total: number } {
    const allTodos = Array.from(this.todos.values());
    const total = allTodos.length;
    const paginated = allTodos.slice(offset, offset + limit);
    return { todos: paginated, total };
  }

  /**
   * Get a single todo by ID
   */
  getTodoById(id: string): Todo | null {
    const todo = this.todos.get(id);
    return todo || null;
  }

  /**
   * Create a new todo
   * @throws Error if title is invalid
   */
  createTodo(request: CreateTodoRequest): Todo {
    // Validation
    if (!request.title || typeof request.title !== "string") {
      throw new Error("Title is required and must be a string");
    }

    const title = request.title.trim();
    if (title.length === 0) {
      throw new Error("Title cannot be empty");
    }

    if (title.length > 500) {
      throw new Error("Title cannot exceed 500 characters");
    }

    const todo: Todo = {
      id: this.generateId(),
      title,
      completed: false,
      createdAt: new Date(),
    };

    this.todos.set(todo.id, todo);
    return todo;
  }

  /**
   * Update a todo by ID
   * @throws Error if todo not found or update invalid
   */
  updateTodo(id: string, request: UpdateTodoRequest): Todo {
    const todo = this.todos.get(id);
    if (!todo) {
      throw new Error(`Todo with ID ${id} not found`);
    }

    // Validate and update title if provided
    if (request.title !== undefined) {
      if (typeof request.title !== "string") {
        throw new Error("Title must be a string");
      }
      const title = request.title.trim();
      if (title.length === 0) {
        throw new Error("Title cannot be empty");
      }
      if (title.length > 500) {
        throw new Error("Title cannot exceed 500 characters");
      }
      todo.title = title;
    }

    // Update completed status if provided
    if (request.completed !== undefined) {
      if (typeof request.completed !== "boolean") {
        throw new Error("Completed must be a boolean");
      }
      todo.completed = request.completed;
    }

    this.todos.set(id, todo);
    return todo;
  }

  /**
   * Delete a todo by ID
   * @throws Error if todo not found
   */
  deleteTodo(id: string): void {
    if (!this.todos.has(id)) {
      throw new Error(`Todo with ID ${id} not found`);
    }
    this.todos.delete(id);
  }

  /**
   * Generate a unique ID
   */
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}

// Export singleton instance
export const todoService = new TodoService();
