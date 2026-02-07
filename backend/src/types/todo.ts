/**
 * Todo type definition
 */
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

/**
 * Request body for creating a todo
 */
export interface CreateTodoRequest {
  title: string;
}

/**
 * Request body for updating a todo
 */
export interface UpdateTodoRequest {
  title?: string;
  completed?: boolean;
}

/**
 * API Response wrapper
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
