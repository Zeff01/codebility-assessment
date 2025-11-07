import { NextResponse } from "next/server"
import React from "react"
import { posts } from "../../../../public/data/posts"

// Create an endpoint that returns all posts
// Default API route on local/api

// GET api/posts -> returns all posts
export async function GET(req) {
  try {
    const res = posts
    return NextResponse.json({ res }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 404 })
  }
}
