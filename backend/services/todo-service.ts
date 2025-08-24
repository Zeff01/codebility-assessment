import { TodoRepository } from "../repository/todo-repository.js";
import { CreateTodo, Todo } from "../types/todo.js";

export class TodoService {
  // Dependency injection
  constructor(private todoRepository: TodoRepository) {}

  // Get all todos
  getAllTodos(): Todo[] {
    return this.todoRepository.getAllTodos();
  }

  // Get a todo by id
  getTodoById(id: number): Todo | undefined {
    return this.todoRepository.getTodoById(id);
  }

  // Create a todo
  createTodo(data: Partial<CreateTodo>): Todo {
    return this.todoRepository.createTodo(data);
  }

  // Update a todo
  updateTodo(id: number, data: Partial<Todo>): Todo | undefined {
    return this.todoRepository.updateTodo(id, data);
  }

  // Delete a todo
  deleteTodo(id: number): boolean {
    return this.todoRepository.deleteTodo(id);
  }
}
