import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { addTodo, getUserTodos } from "@/lib/data-store" // Import functions from shared store

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

export async function GET() {
  try {
    const userId = await getAuthenticatedUser()

    if (!userId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const userTodos = (await getUserTodos(userId)).sort(
      // Await the async function
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )

    return NextResponse.json({ todos: userTodos })
  } catch (error) {
    console.error("Get todos error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const userId = await getAuthenticatedUser()

    if (!userId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const { title } = await request.json()

    if (!title || !title.trim()) {
      return NextResponse.json({ error: "Todo title is required" }, { status: 400 })
    }

    const newTodo = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      title: title.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      userId,
    }

    await addTodo(newTodo) // Await the async function

    return NextResponse.json({ todo: newTodo })
  } catch (error) {
    console.error("Create todo error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
