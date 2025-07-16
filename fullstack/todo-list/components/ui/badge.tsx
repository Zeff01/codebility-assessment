"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Trash2, Plus, LogOut } from "lucide-react"

interface Todo {
  id: string
  title: string
  completed: boolean
  createdAt: string
}

interface AppUser {
  name: string
  email: string
}

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState("")
  const [user, setUser] = useState<AppUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
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

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/signout", { method: "POST" })
      router.push("/auth/signin")
      router.refresh()
    } catch (error) {
      setError("Failed to sign out")
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
      } else {
        setError("Failed to add todo")
      }
    } catch (error) {
      setError("Failed to add todo")
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
        setError("Failed to update todo")
      }
    } catch (error) {
      setError("Failed to update todo")
    }
  }

  const handleDeleteTodo = async (id: string) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setTodos(todos.filter((todo) => todo.id !== id))
      } else {
        setError("Failed to delete todo")
      }
    } catch (error) {
      setError("Failed to delete todo")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  const completedCount = todos.filter((todo) => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-gray-900">My Todos</h1>
            {totalCount > 0 && (
              <Badge variant="secondary">
                {completedCount}/{totalCount} completed
              </Badge>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {user && (
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>{user.name}</span>
              </div>
            )}
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Add Todo Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Add New Todo</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddTodo} className="flex space-x-2">
              <Input
                type="text"
                placeholder="What needs to be done?"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" disabled={!newTodo.trim()}>
                <Plus className="w-4 h-4 mr-2" />
                Add Todo
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Todos List */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-gray-500 text-lg">No todos yet!</p>
                <p className="text-gray-400 text-sm mt-2">Add your first todo above to get started.</p>
              </CardContent>
            </Card>
          ) : (
            todos.map((todo) => (
              <Card key={todo.id} className={`transition-all ${todo.completed ? "bg-gray-50" : "bg-white"}`}>
                <CardContent className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <Checkbox
                        checked={todo.completed}
                        onCheckedChange={(checked) => handleToggleTodo(todo.id, checked as boolean)}
                      />
                      <div className="flex-1">
                        <p className={`font-medium ${todo.completed ? "line-through text-gray-500" : "text-gray-900"}`}>
                          {todo.title}
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                          Created{" "}
                          {new Date(todo.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  )
}
