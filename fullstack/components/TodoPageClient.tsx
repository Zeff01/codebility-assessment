"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  userId: string;
}

export default function TodoPageClient() {
  const { data: session } = useSession();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);

  // Fetch todos on mount
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("/api/todos");
        if (!response.ok) throw new Error("Failed to fetch todos");
        const data = await response.json();
        setTodos(data.data || []);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (session?.user) {
      fetchTodos();
    }
  }, [session?.user]);

  const handleCreateTodo = async (title: string) => {
    setIsCreating(true);
    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });

      if (!response.ok) throw new Error("Failed to create todo");
      const data = await response.json();
      setTodos([...todos, data.data]);
    } catch (error) {
      console.error("Failed to create todo:", error);
    } finally {
      setIsCreating(false);
    }
  };

  const handleToggleTodo = async (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !todo.completed }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update todo");
      }
      const data = await response.json();
      setTodos(todos.map((t) => (t.id === id ? data.data : t)));
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete todo");
      setTodos(todos.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  return (
    <div className="space-y-6">
      <CreateTodo onCreateTodo={handleCreateTodo} isLoading={isCreating} />
      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
        isLoading={isLoading}
      />
    </div>
  );
}
