import { NextRequest, NextResponse } from "next/server";
import { posts } from "../../../data/posts";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  // Await the asynchronous route params container
  const { id } = await params;
  
  // Convert the string ID from the URL into an integer
  const postId = parseInt(id, 10);
  
  // Find the post matching the ID
  const post = posts.find((p) => p.id === postId);

  // If the post doesn't exist, return a 404 Custom Error JSON object
  if (!post) {
    return NextResponse.json(
      { error: `Post with ID ${id} not found` },
      { status: 404 }
    );
  }

  // If found, return the specific post data
  return NextResponse.json(post);
}