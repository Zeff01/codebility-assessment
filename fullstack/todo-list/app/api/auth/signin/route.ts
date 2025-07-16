import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { findUser } from "@/lib/data-store" // Import functions from shared store

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("auth-token")

    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const userData = JSON.parse(atob(token.value))

    const user = await findUser((u) => u.id === userData.userId) // Await the async function
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    })
  } catch (error) {
    console.error("Get user error:", error)
    return NextResponse.json({ error: "Invalid token" }, { status: 401 })
  }
}
