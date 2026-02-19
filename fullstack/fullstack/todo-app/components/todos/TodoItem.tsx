"use client";

import { useState, useRef, useEffect } from "react";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string | Date;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setEditValue(todo.title);
    setIsEditing(true);
  };

  const handleSave = () => {
    const trimmed = editValue.trim();
    if (trimmed && trimmed !== todo.title) {
      onEdit(todo.id, trimmed);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(todo.title);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <div className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => onToggle(todo.id, e.target.checked)}
        className="w-5 h-5 rounded border-zinc-300 dark:border-zinc-600 text-blue-600 focus:ring-blue-500"
      />
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          className="flex-1 px-2 py-1 border border-zinc-300 dark:border-zinc-600 rounded bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <span
          onDoubleClick={handleDoubleClick}
          className={`flex-1 text-zinc-900 dark:text-zinc-100 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded px-1 -mx-1 ${
            todo.completed ? "line-through text-zinc-500" : ""
          }`}
          title="Double-click to edit"
        >
          {todo.title}
        </span>
      )}
      <span className="text-xs text-zinc-500 dark:text-zinc-400">
        {new Date(todo.createdAt).toLocaleDateString()}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
        aria-label="Delete todo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
