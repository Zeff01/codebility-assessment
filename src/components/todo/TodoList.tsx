"use client";

import { useAppSelector, useAppDispatch } from "@/store";
import {
  selectFilteredTodos,
  selectTodosLoading,
  selectTodosError,
  toggleTodo,
  deleteTodo,
} from "@/store/features/todo";
import { openModal, showToast } from "@/store/features/ui";
import { TodoItem } from "./TodoItem";
import { LoadingSpinner } from "@/components/ui";

export function TodoList() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectFilteredTodos);
  const loading = useAppSelector(selectTodosLoading);
  const error = useAppSelector(selectTodosError);

  const handleToggle = async (id: string) => {
    try {
      await dispatch(toggleTodo(id)).unwrap();
      dispatch(showToast({ message: "Todo updated", type: "success" }));
    } catch {
      dispatch(showToast({ message: "Failed to update todo", type: "error" }));
    }
  };

  const handleEdit = (id: string) => {
    dispatch(openModal({ type: "edit", todoId: id }));
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      try {
        await dispatch(deleteTodo(id)).unwrap();
        dispatch(showToast({ message: "Todo deleted", type: "success" }));
      } catch {
        dispatch(showToast({ message: "Failed to delete todo", type: "error" }));
      }
    }
  };

  if (loading && todos.length === 0) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 dark:text-red-400">{error}</p>
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <svg
          className="mx-auto w-16 h-16 text-gray-300 dark:text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          No todos yet. Create your first one!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
