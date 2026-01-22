"use client";

import { Checkbox } from "@/components/ui";
import { cn, formatRelativeDate } from "@/lib/utils";
import { Todo } from "@/store/features/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onEdit, onDelete }: TodoItemProps) {
  return (
    <div
      className={cn(
        "group flex items-start gap-3 p-4 rounded-lg border transition-all",
        "bg-white dark:bg-gray-800",
        "border-gray-200 dark:border-gray-700",
        "hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600",
        todo.completed && "opacity-60"
      )}
    >
      <div className="pt-0.5">
        <Checkbox
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3
          className={cn(
            "font-medium text-gray-900 dark:text-gray-100",
            todo.completed && "line-through text-gray-500 dark:text-gray-400"
          )}
        >
          {todo.title}
        </h3>
        {todo.description && (
          <p
            className={cn(
              "mt-1 text-sm text-gray-600 dark:text-gray-400",
              todo.completed && "line-through"
            )}
          >
            {todo.description}
          </p>
        )}
        <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
          Created {formatRelativeDate(todo.createdAt)}
        </p>
      </div>

      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onEdit(todo.id)}
          className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
          title="Edit todo"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
          title="Delete todo"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
