export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTodoRequest {
  title: string;
  completed: boolean;
}

export interface UpdateTodoRequest {
  title?: string;
  completed?: boolean;
}
