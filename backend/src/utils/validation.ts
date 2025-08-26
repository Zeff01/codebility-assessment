import { CreateTodoRequest, UpdateTodoRequest } from "../types/todo";

export const validateTodoCreate = (
  todoData: CreateTodoRequest
): string | null => {
  if (!todoData.title || todoData.title.trim() === "") {
    return "Title is required and must be a string.";
  }

  if (todoData.title.length > 255) {
    return "Title must be less than 255 characters long.";
  }
  return null;
};

export const validateTodoUpdate = (
  todoData: UpdateTodoRequest
): string | null => {
  if (todoData.title !== undefined) {
    if (todoData.title.trim() === "") {
      return "Title must not be empty.";
    }

    if (todoData.title.length > 255) {
      return "Title must be less than 255 characters long.";
    }
  }

  return null;
};
