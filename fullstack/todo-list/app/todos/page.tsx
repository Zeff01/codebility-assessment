"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface Todo {
  id: string
  title: string
  completed: boolean
  createdAt: string
}

interface User {
  id: string
  username: string
  email: string
}

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState("")
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingTitle, setEditingTitle] = useState("")
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter()

  useEffect(() => {
    fetchUserAndTodos()
  }, [])

  const fetchUserAndTodos = async () => {
    try {
      const [userResponse, todosResponse] = await Promise.all([fetch("/api/auth/me"), fetch("/api/todos")])

      if (!userResponse.ok) {
        router.push("/auth/signin")
        return
      }

      const userData = await userResponse.json()
      setUser(userData.user)

      if (todosResponse.ok) {
        const todosData = await todosResponse.json()
        setTodos(todosData.todos)
      }
    } catch (error) {
      setError("Failed to load data")
    } finally {
      setLoading(false)
    }
  }

  const showMessage = (message: string, type: "error" | "success") => {
    if (type === "error") {
      setError(message)
      setSuccess("")
    } else {
      setSuccess(message)
      setError("")
    }
    setTimeout(() => {
      setError("")
      setSuccess("")
    }, 3000)
  }

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/signout", { method: "POST" })
      router.push("/auth/signin")
      router.refresh()
    } catch (error) {
      showMessage("Failed to sign out", "error")
    }
  }

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTodo.trim()) return

    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTodo.trim() }),
      })

      if (response.ok) {
        const data = await response.json()
        setTodos([data.todo, ...todos])
        setNewTodo("")
        showMessage("Todo added successfully", "success")
      } else {
        showMessage("Failed to add todo", "error")
      }
    } catch (error) {
      showMessage("Failed to add todo", "error")
    }
  }

  const handleToggleTodo = async (id: string, completed: boolean) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed }),
      })

      if (response.ok) {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)))
      } else {
        showMessage("Failed to update todo", "error")
      }
    } catch (error) {
      showMessage("Failed to update todo", "error")
    }
  }

  const handleEditTodo = async (id: string) => {
    if (!editingTitle.trim()) return

    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: editingTitle.trim() }),
      })

      if (response.ok) {
        const data = await response.json()
        setTodos(todos.map((todo) => (todo.id === id ? data.todo : todo)))
        setEditingId(null)
        setEditingTitle("")
        showMessage("Todo updated successfully", "success")
      } else {
        showMessage("Failed to update todo", "error")
      }
    } catch (error) {
      showMessage("Failed to update todo", "error")
    }
  }

  const handleDeleteTodo = async (id: string) => {
    if (!confirm("Delete this todo?")) return

    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setTodos(todos.filter((todo) => todo.id !== id))
        showMessage("Todo deleted successfully", "success")
      } else {
        showMessage("Failed to delete todo", "error")
      }
    } catch (error) {
      showMessage("Failed to delete todo", "error")
    }
  }

  const startEditing = (todo: Todo) => {
    setEditingId(todo.id)
    setEditingTitle(todo.title)
  }

  const cancelEditing = () => {
    setEditingId(null)
    setEditingTitle("")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--background)" }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Header */}
      <header className="border-b border-gray-800 p-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-light text-white">Todos</h1>
            {user && <p className="text-sm text-gray-400">Welcome, {user.username}</p>}
          </div>

          <div className="flex items-center space-x-3">
            <Link href="/settings" className="btn-ghost">
              Settings
            </Link>
            <button onClick={handleSignOut} className="btn-secondary text-sm">
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4">
        {error && <div className="alert-error mb-4">{error}</div>}
        {success && <div className="alert-success mb-4">{success}</div>}

        {/* Add Todo Form */}
        <form onSubmit={handleAddTodo} className="mb-8">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Add a new todo..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="input-field flex-1"
            />
            <button type="submit" className="btn-primary" disabled={!newTodo.trim()}>
              Add
            </button>
          </div>
        </form>

        {/* Todos List */}
        <div className="space-y-2">
          {todos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">No todos yet. Add one above.</p>
            </div>
          ) : (
            todos.map((todo) => (
              <div key={todo.id} className="card p-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => handleToggleTodo(todo.id, e.target.checked)}
                    className="h-4 w-4 text-white focus:ring-white border-gray-600 rounded bg-gray-800"
                  />

                  {editingId === todo.id ? (
                    <div className="flex-1 flex space-x-2">
                      <input
                        type="text"
                        value={editingTitle}
                        onChange={(e) => setEditingTitle(e.target.value)}
                        className="input-field flex-1 py-1 text-sm"
                        autoFocus
                      />
                      <button onClick={() => handleEditTodo(todo.id)} className="btn-primary text-sm px-3 py-1">
                        Save
                      </button>
                      <button onClick={cancelEditing} className="btn-ghost text-sm px-3 py-1">
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <p
                          className={`${
                            todo.completed ? "line-through text-gray-500" : "text-white"
                          } transition-all duration-200`}
                        >
                          {todo.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{new Date(todo.createdAt).toLocaleDateString()}</p>
                      </div>

                      <div className="flex space-x-1">
                        <button onClick={() => startEditing(todo)} className="btn-ghost text-sm px-2 py-1">
                          Edit
                        </button>
                        <button onClick={() => handleDeleteTodo(todo.id)} className="btn-ghost text-sm px-2 py-1">
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Stats */}
        {todos.length > 0 && (
          <div className="mt-8 text-center text-sm text-gray-400">
            {todos.filter((t) => t.completed).length} of {todos.length} completed
          </div>
        )}
      </main>
    </div>
  )
}
