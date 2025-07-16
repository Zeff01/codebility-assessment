import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { findUser, updateUser } from "@/lib/data-store" // Import functions from shared store

export async function PATCH(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("auth-token")

    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const userData = JSON.parse(atob(token.value))
    const { username, email, currentPassword, newPassword } = await request.json()

    const user = await findUser((u) => u.id === userData.userId) // Await the async function
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    if (newPassword) {
      if (!currentPassword || user.password !== currentPassword) {
        return NextResponse.json({ error: "Current password is incorrect" }, { status: 400 })
      }
      if (newPassword.length < 6) {
        return NextResponse.json({ error: "New password must be at least 6 characters long" }, { status: 400 })
      }
    }

    const existingUserWithSameCreds = await findUser(
      // Await the async function
      (u) => u.id !== userData.userId && (u.email === email || u.username === username),
    )
    if (existingUserWithSameCreds) {
      return NextResponse.json({ error: "Username or email already exists" }, { status: 400 })
    }

    const updatedUser = await updateUser(user.id, {
      // Await the async function
      username: username.trim(),
      email: email.toLowerCase().trim(),
      password: newPassword || user.password,
    })

    if (!updatedUser) {
      return NextResponse.json({ error: "Failed to update user" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      user: {
        id: updatedUser.id,
        username: updatedUser.username,
        email: updatedUser.email,
      },
    })
  } catch (error) {
    console.error("Update profile error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
