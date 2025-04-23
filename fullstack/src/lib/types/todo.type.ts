export interface Todo {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
  }
  
  export type TodoCreate = Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>;
  export type TodoUpdate = Partial<Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>>;