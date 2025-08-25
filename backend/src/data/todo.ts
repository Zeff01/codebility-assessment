export interface TodoType {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

export const TODO: TodoType[] = [];
