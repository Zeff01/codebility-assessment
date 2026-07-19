"use client";

import { useEffect, useState, useCallback } from "react";
import AlertBanner from "@/components/ui/AlertBanner";
import StatsBar from "@/components/todos/StatsBar";
import AddTodoForm from "@/components/todos/AddTodoForm";
import TodoItem from "@/components/todos/TodoItem";
import EmptyState from "@/components/todos/EmptyState";
import { StatsSkeleton, TodoListSkeleton } from "@/components/todos/Skeletons";
import type { Todo } from "@/components/todos/types";

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTodos = useCallback(async () => {
    try {
      setError(null);
      const res = await fetch("/api/todos");
      if (!res.ok) throw new Error("Failed to load your tasks.");
      const data: Todo[] = await res.json();
      setTodos(data);
    } catch {
      setError("We couldn't load your tasks. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTodos();
  }, [fetchTodos]);

  async function handleAdd(title: string) {
    const optimistic: Todo = {
      id: `temp-${Date.now()}`,
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((prev) => [optimistic, ...prev]);

    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      if (!res.ok) throw new Error();
      const created: Todo = await res.json();
      setTodos((prev) => prev.map((t) => (t.id === optimistic.id ? created : t)));
    } catch {
      setTodos((prev) => prev.filter((t) => t.id !== optimistic.id));
      setError("Your task couldn't be added. Try again.");
    }
  }

  async function handleToggle(id: string, completed: boolean) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed } : t))
    );
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed }),
      });
      if (!res.ok) throw new Error();
    } catch {
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, completed: !completed } : t))
      );
      setError("That update didn't save. Try again.");
    }
  }

  async function handleDelete(id: string) {
    const previous = todos;
    setTodos((prev) => prev.filter((t) => t.id !== id));
    try {
      const res = await fetch(`/api/todos/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
    } catch {
      setTodos(previous);
      setError("We couldn't delete that task. Try again.");
    }
  }

  const completed = todos.filter((t) => t.completed).length;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Your tasks
        </h2>
        <p className="text-sm text-slate-400">
          {todos.length === 0
            ? "A clean slate — add something below to get started."
            : `${completed} of ${todos.length} done. Keep the streak going.`}
        </p>
      </div>

      {error && (
        <AlertBanner message={error} onDismiss={() => setError(null)} />
      )}

      {loading ? <StatsSkeleton /> : <StatsBar total={todos.length} completed={completed} />}

      <AddTodoForm onAdd={handleAdd} />

      {loading ? (
        <TodoListSkeleton />
      ) : todos.length === 0 ? (
        <EmptyState />
      ) : (
        <ul className="flex flex-col gap-3">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}