import { NextResponse } from "next/server"
import { posts } from "../../../../../public/data/posts"

// Add another endpoint to get a specific post by ID
// API route on local/api/posts

// GET /posts/:id -> returns specific post by ID
export async function GET(req, { params }) {
  const { id } = await params
  try {
    const res = posts.find((post) => post.id === Number(id))
    if (!res) {
      return NextResponse.json({ error: `Post ${id} not found` }, { status: 404 })
    }
    return NextResponse.json({ res }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: `Failed to fetch post of id ${id}` }, { status: 500 })
  }
}
