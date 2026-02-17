'use client';

import { Todo } from '@/types/todo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Loader2, Check, X } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
  completingId?: string | null;
  deletingId?: string | null;
}

export function TodoItem({ todo, onComplete, onDelete, completingId, deletingId }: TodoItemProps) {
  return (
    <div className="bg-card flex flex-col gap-3 rounded-lg border p-4 transition-shadow hover:shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0 flex-1">
        <h3
          className={cn(
            'truncate text-base font-medium',
            todo.completed && 'text-muted-foreground line-through'
          )}
        >
          {todo.title}
        </h3>
        <p className="text-muted-foreground mt-1 text-sm">
          {new Date(todo.createdAt).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      </div>
      <div className="flex shrink-0 gap-2 sm:ml-4">
        <Button
          variant={todo.completed ? 'outline' : 'default'}
          size="sm"
          onClick={() => onComplete(todo.id)}
          disabled={completingId === todo.id}
        >
          {completingId === todo.id ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : todo.completed ? (
            <>
              <X className="h-4 w-4 sm:mr-1" />
              <span className="hidden sm:inline">Undo</span>
            </>
          ) : (
            <>
              <Check className="h-4 w-4 sm:mr-1" />
              <span className="hidden sm:inline">Complete</span>
            </>
          )}
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => onDelete(todo.id)}
          disabled={deletingId === todo.id}
        >
          {deletingId === todo.id ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <X className="h-4 w-4 sm:mr-1 sm:hidden" />
              <span className="hidden sm:inline">Delete</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
