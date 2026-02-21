import { NextResponse } from "next/server";
import { posts } from "../../data/posts";

// GET Read All
export async function GET() {
  // Send posts array as JSON response
  return NextResponse.json(posts);
}
