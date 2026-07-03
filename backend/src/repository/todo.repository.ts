import crypto from 'node:crypto';
import { Todo, CreateTodoDTO, UpdateTodoDTO } from '../model/todo.model.js';

export interface ITodoRepository {
  findAll(): Todo[];
  findById(id: string): Todo | undefined;
  create(data: CreateTodoDTO): Todo;
  update(id: string, data: UpdateTodoDTO): Todo | undefined;
  delete(id: string): boolean;
}

export class InMemoryTodoRepository implements ITodoRepository {
  private todos: Todo[] = []; // change this into a constructor if id go and implement it to a db in the controller 

  findAll(): Todo[] {
    return this.todos;
  }

  findById(id: string): Todo | undefined {
    return this.todos.find((t) => t.id === id);
  }

  create(data: CreateTodoDTO): Todo {
    const todo: Todo = {
      id: crypto.randomUUID(),
      title: data.title,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    this.todos.push(todo);
    return todo;
  }

  update(id: string, data: UpdateTodoDTO): Todo | undefined {
    const todo = this.findById(id);
    if (!todo) return undefined;

    if (data.title !== undefined) todo.title = data.title;
    if (data.completed !== undefined) todo.completed = data.completed;

    return todo;
  }

  delete(id: string): boolean {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) return false;

    this.todos.splice(index, 1);
    return true;
  }
}
