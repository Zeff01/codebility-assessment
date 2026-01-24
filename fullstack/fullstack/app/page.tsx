"use client";

import { useSession, signOut, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function HomePage() {
  const { data: session, status } = useSession();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [editId, setEditId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");

  // Redirect unauthenticated users
  useEffect(() => {
    if (status === "unauthenticated") {
      signIn(undefined, { callbackUrl: "/auth/signin" });
    }
  }, [status]);

  // Fetch todos
  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/todos");
      if (!res.ok) throw new Error("Failed to fetch todos");
      const data = await res.json();
      setTodos(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated") fetchTodos();
  }, [status]);

  // Add todo
  const addTodo = async () => {
    if (!newTodo.trim()) return;
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify({ title: newTodo }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Failed to add todo");
      const todo = await res.json();
      setTodos([...todos, todo]);
      setNewTodo("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Toggle complete
  const toggleComplete = async (id: number, completed: boolean) => {
    try {
      setActionLoading(id);
      setError(null);
      const res = await fetch(`/api/todos?id=${id}`, {
        method: "PUT",
        body: JSON.stringify({ completed }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Failed to update todo");
      setTodos(todos.map((t) => (t.id === id ? { ...t, completed } : t)));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setActionLoading(null);
    }
  };

  // Delete todo
  const deleteTodo = async (id: number) => {
    try {
      setActionLoading(id);
      setError(null);
      const res = await fetch(`/api/todos?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete todo");
      setTodos(todos.filter((t) => t.id !== id));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setActionLoading(null);
    }
  };

  // Update todo
  const updateTodo = async (id: number, title: string) => {
    if (!title.trim()) return;
    try {
      setActionLoading(id);
      setError(null);
      const res = await fetch(`/api/todos?id=${id}`, {
        method: "PUT",
        body: JSON.stringify({ title }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Failed to update todo");
      setTodos(todos.map((t) => (t.id === id ? { ...t, title } : t)));
      setEditId(null);
      setEditTitle("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setActionLoading(null);
    }
  };

  if (status === "loading")
    return <p className="text-center mt-20 text-gray-500">Loading...</p>;
  if (!session)
    return (
      <p className="text-center mt-20 text-gray-500">
        Redirecting to sign in...
      </p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center p-4 sm:p-6">
      <div className="w-full max-w-5xl flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Hello, {session.user?.name}
          </h1>
          <button
            onClick={() => signOut()}
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-md"
          >
            Sign Out
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg shadow-sm">
            {error}
          </div>
        )}

        {/* Add Todo */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <button
            onClick={addTodo}
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Todo"}
          </button>
        </div>

        {/* Todo List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {todos.length === 0 && !loading && (
            <p className="text-gray-500 col-span-full text-center">
              No todos yet.
            </p>
          )}
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col sm:flex-row justify-between gap-3 w-full break-words"
            >
              {/* Left: checkbox + title */}
              <div className="flex items-start gap-3 flex-1 w-full">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleComplete(todo.id, e.target.checked)}
                  disabled={actionLoading === todo.id}
                  className="h-6 w-6 mt-1 accent-blue-600"
                />

                {editId === todo.id ? (
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <span
                    className={`flex-1 text-lg break-words whitespace-pre-wrap ${
                      todo.completed
                        ? "line-through text-gray-400"
                        : "text-gray-800"
                    }`}
                  >
                    {todo.title}
                  </span>
                )}
              </div>

              {/* Right: Actions */}
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                {editId === todo.id ? (
                  <>
                    <button
                      onClick={() => updateTodo(todo.id, editTitle)}
                      disabled={actionLoading === todo.id}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 shadow-sm"
                    >
                      {actionLoading === todo.id ? "Saving..." : "Save"}
                    </button>
                    <button
                      onClick={() => {
                        setEditId(null);
                        setEditTitle("");
                      }}
                      className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 shadow-sm"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setEditId(todo.id);
                        setEditTitle(todo.title);
                      }}
                      className="px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 shadow-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      disabled={actionLoading === todo.id}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 shadow-sm"
                    >
                      {actionLoading === todo.id ? "Processing..." : "Delete"}
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
