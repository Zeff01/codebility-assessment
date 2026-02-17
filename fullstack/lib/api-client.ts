import { Todo, CreateTodoInput, UpdateTodoInput } from '@/types/todo';

const API_BASE_URL = '/api';

interface ApiSuccessResponse<T> {
  success: true;
  data: T;
}

interface ApiErrorResponse {
  success: false;
  error: string;
}

type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

class ApiError extends Error {
  constructor(
    message: string,
    public status?: number
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  const result: ApiResponse<T> = await response.json();

  if (!result.success) {
    throw new ApiError(result.error, response.status);
  }

  return result.data;
}

export const apiClient = {
  /**
   * Fetch all todos for the authenticated user
   */
  async getTodos(): Promise<Todo[]> {
    const response = await fetch(`${API_BASE_URL}/todos`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new ApiError(errorText || 'Failed to fetch todos', response.status);
    }

    return handleResponse<Todo[]>(response);
  },

  /**
   * Create a new todo
   */
  async createTodo(input: CreateTodoInput): Promise<Todo> {
    const response = await fetch(`${API_BASE_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      const error: ApiErrorResponse = await response.json();
      throw new ApiError(error.error, response.status);
    }

    return handleResponse<Todo>(response);
  },

  /**
   * Update a todo (e.g., toggle completed status)
   */
  async updateTodo(id: string, input: UpdateTodoInput): Promise<Todo> {
    const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      const error: ApiErrorResponse = await response.json();
      throw new ApiError(error.error, response.status);
    }

    return handleResponse<Todo>(response);
  },

  /**
   * Delete a todo
   */
  async deleteTodo(id: string): Promise<{ id: string }> {
    const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new ApiError('Failed to delete todo', response.status);
    }

    return handleResponse<{ id: string }>(response);
  },
};
