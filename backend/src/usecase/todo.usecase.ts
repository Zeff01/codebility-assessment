import { ITodoRepository } from '../repository/todo.repository.js';
import { Todo, CreateTodoDTO, UpdateTodoDTO } from '../model/todo.model.js';
import { DomainError } from '../common/error/domain.error.js';

export class TodoUsecase {
  constructor(private repo: ITodoRepository) { }

  getAllTodos(): Todo[] {
    return this.repo.findAll();
  }

  getTodoById(id: string): Todo {
    const todo = this.repo.findById(id);
    if (!todo) throw new DomainError(404, 'Todo not found');
    return todo;
  }

  createTodo(data: CreateTodoDTO): Todo {
    if (!data || typeof data.title !== 'string' || !data.title.trim()) {
      throw new DomainError(400, 'Title is required');
    }
    return this.repo.create({ title: data.title.trim() });
  }

  updateTodo(id: string, data: UpdateTodoDTO): Todo {
    if (!data || typeof data !== 'object') {
      throw new DomainError(400, 'Invalid request body');
    }

    const updateData: UpdateTodoDTO = {};

    if (data.title !== undefined) {
      if (typeof data.title !== 'string' || !data.title.trim()) {
        throw new DomainError(400, 'Title must be a non-empty string');
      }
      updateData.title = data.title.trim();
    }

    if (data.completed !== undefined) {
      if (typeof data.completed !== 'boolean') {
        throw new DomainError(400, 'Completed must be a boolean');
      }
      updateData.completed = data.completed;
    }

    const updated = this.repo.update(id, updateData);
    if (!updated) throw new DomainError(404, 'Todo not found');
    return updated;
  }

  deleteTodo(id: string): void {
    const deleted = this.repo.delete(id);
    if (!deleted) throw new DomainError(404, 'Todo not found');
  }
}
