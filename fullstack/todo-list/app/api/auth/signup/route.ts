import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { addUser, findUser } from "@/lib/data-store" // Import functions from shared store

export async function POST(request: NextRequest) {
  try {
    const { username, email, password } = await request.json()

    if (!username || !email || !password) {
      return NextResponse.json({ error: "Username, email, and password are required" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters long" }, { status: 400 })
    }

    const existingUser = await findUser((u) => u.email === email || u.username === username) // Await the async function
    if (existingUser) {
      return NextResponse.json({ error: "User with this email or username already exists" }, { status: 400 })
    }

    const newUser = {
      id: Date.now().toString(),
      username: username.trim(),
      email: email.toLowerCase().trim(),
      password,
    }

    await addUser(newUser) // Await the async function

    const token = btoa(
      JSON.stringify({
        userId: newUser.id,
        email: newUser.email,
        username: newUser.username,
        timestamp: Date.now(),
      }),
    )

    const cookieStore = await cookies()
    cookieStore.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    })

    return NextResponse.json({
      success: true,
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    })
  } catch (error) {
    console.error("Sign up error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
