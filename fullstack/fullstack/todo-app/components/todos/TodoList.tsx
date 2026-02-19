"use client";

import { useState, useEffect, useCallback } from "react";
import { TodoItem } from "./TodoItem";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newTodo, setNewTodo] = useState("");

  const fetchTodos = useCallback(async () => {
    try {
      const res = await fetch("/api/todos");
      if (!res.ok) throw new Error("Failed to fetch todos");
      const data = await res.json();
      setTodos(data);
    } catch {
      setError("Failed to load todos");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTodo.trim() }),
      });
      if (!res.ok) throw new Error("Failed to create todo");
      const todo = await res.json();
      setTodos([todo, ...todos]);
      setNewTodo("");
    } catch {
      setError("Failed to create todo");
    }
  };

  const handleToggle = async (id: string, completed: boolean) => {
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed }),
      });
      if (!res.ok) throw new Error("Failed to update todo");
      const updated = await res.json();
      setTodos(todos.map((t) => (t.id === id ? { ...t, completed: updated.completed } : t)));
    } catch {
      setError("Failed to update todo");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/todos/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete todo");
      setTodos(todos.filter((t) => t.id !== id));
    } catch {
      setError("Failed to delete todo");
    }
  };

  const handleEdit = async (id: string, title: string) => {
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      if (!res.ok) throw new Error("Failed to update todo");
      const updated = await res.json();
      setTodos(todos.map((t) => (t.id === id ? { ...t, title: updated.title } : t)));
    } catch {
      setError("Failed to update todo");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-zinc-500 dark:text-zinc-400">Loading todos...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleCreate} className="flex gap-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-1 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          Add
        </button>
      </form>

      {error && (
        <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-md text-sm">
          {error}
        </div>
      )}

      <div className="space-y-2">
        {todos.length === 0 ? (
          <p className="text-center text-zinc-500 dark:text-zinc-400 py-8">
            No todos yet. Add one above!
          </p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        )}
      </div>
    </div>
  );
}
