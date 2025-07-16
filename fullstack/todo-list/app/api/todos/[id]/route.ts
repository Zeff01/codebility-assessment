import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { findTodoByIdAndUser, updateTodoItem, deleteTodoItem } from "@/lib/data-store" // Import functions from shared store

async function getAuthenticatedUser() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("auth-token")

    if (!token) {
      return null
    }

    const userData = JSON.parse(atob(token.value))
    return userData.userId
  } catch {
    return null
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const userId = await getAuthenticatedUser()
    const { id } = await params

    if (!userId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const body = await request.json()
    const { completed, title } = body

    const existingTodo = await findTodoByIdAndUser(id, userId) // Await the async function
    if (!existingTodo) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 })
    }

    const updates: Partial<{ title: string; completed: boolean }> = {}
    if (completed !== undefined) {
      updates.completed = completed
    }
    if (title !== undefined) {
      if (!title.trim()) {
        return NextResponse.json({ error: "Title cannot be empty" }, { status: 400 })
      }
      updates.title = title.trim()
    }

    const updatedTodo = await updateTodoItem(id, userId, updates) // Await the async function

    if (!updatedTodo) {
      return NextResponse.json({ error: "Failed to update todo" }, { status: 500 })
    }

    return NextResponse.json({ todo: updatedTodo })
  } catch (error) {
    console.error("Update todo error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const userId = await getAuthenticatedUser()
    const { id } = await params

    if (!userId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const deleted = await deleteTodoItem(id, userId) // Await the async function

    if (!deleted) {
      return NextResponse.json({ error: "Todo not found or failed to delete" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Delete todo error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
