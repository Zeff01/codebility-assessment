import { Todo, CreateTodoRequest, UpdateTodoRequest } from "../types/todo";
import { TodoModel } from "../models/todoModel";
import { validateTodoCreate, validateTodoUpdate } from "../utils/validation";

export const TodoService = {
  // Get all todos
  getAllTodo: (): Todo[] => {
    return TodoModel.findAll();
  },

  // Get a todo by ID
  getTodoById: (id: string): { todo?: Todo; error?: string } => {
    const todo = TodoModel.findById(id);

    if (!todo) {
      return { error: "Todo not found." };
    }
    return { todo };
  },

  // Create a new todo
  createTodo: (
    todoData: CreateTodoRequest
  ): { todo?: Todo; error?: string } => {
    const validationError = validateTodoCreate(todoData);

    if (validationError) {
      return { error: validationError };
    }

    const todo = TodoModel.create(todoData);
    return { todo };
  },

  // Update an existing todo
  updateTodo: (
    id: string,
    todoData: UpdateTodoRequest
  ): { todo?: Todo; error?: string } => {
    const validationError = validateTodoUpdate(todoData);

    if (validationError) {
      return { error: validationError };
    }

    const todo = TodoModel.update(id, todoData);
    if (!todo) {
      return { error: "Todo not found." };
    }
    return { todo };
  },

  // Delete a todo
  deleteTodo: (id: string): { success?: boolean; error?: string } => {
    const success = TodoModel.delete(id);

    if (!success) {
      return { error: "Todo not found." };
    }

    return { success: true };
  },
};
