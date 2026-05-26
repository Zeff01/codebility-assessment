import { posts } from "@/data/posts";
import { NextResponse } from "next/server";

// Get all posts
export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Fetched data successfully",
    posts,
  });
}
