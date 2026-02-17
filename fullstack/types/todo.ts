export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  userId: string;
  createdAt: string;
}

export interface CreateTodoInput {
  title: string;
}

export interface UpdateTodoInput {
  completed: boolean;
}

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
}
