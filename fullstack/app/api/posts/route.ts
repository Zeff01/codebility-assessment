import { NextResponse } from "next/server";
import { posts } from "../../../data/posts";

/**
 * GET /api/posts
 * Returns all blog posts.
 */
export async function GET() {
  return NextResponse.json(
    {
      success: true,
      count: posts.length,
      data: posts,
    },
    { status: 200 },
  );
}
