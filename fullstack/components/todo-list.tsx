'use client';

import { Todo } from '@/types/todo';
import { TodoItem } from './todo-item';
import { Loader2 } from 'lucide-react';

interface TodoListProps {
  todos: Todo[];
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
  isLoading?: boolean;
  completingId?: string | null;
  deletingId?: string | null;
}

export function TodoList({
  todos,
  onComplete,
  onDelete,
  isLoading,
  completingId,
  deletingId,
}: TodoListProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="text-muted-foreground h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground text-lg">No todos yet. Create your first todo above!</p>
      </div>
    );
  }

  const activeTodos = todos.filter((t) => !t.completed);
  const completedTodos = todos.filter((t) => t.completed);

  return (
    <div className="space-y-4">
      {activeTodos.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
            Active ({activeTodos.length})
          </h2>
          {activeTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onComplete={onComplete}
              onDelete={onDelete}
              completingId={completingId}
              deletingId={deletingId}
            />
          ))}
        </div>
      )}

      {completedTodos.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
            Completed ({completedTodos.length})
          </h2>
          {completedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onComplete={onComplete}
              onDelete={onDelete}
              completingId={completingId}
              deletingId={deletingId}
            />
          ))}
        </div>
      )}
    </div>
  );
}
