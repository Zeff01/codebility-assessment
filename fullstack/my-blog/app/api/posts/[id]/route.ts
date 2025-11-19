import { NextResponse } from "next/server";
import { posts } from "@/data/posts";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const postId = parseInt(id);

  if (isNaN(postId)) {
    return NextResponse.json(
      { error: "Invalid post ID" },
      { status: 400 }
    );
  }

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return NextResponse.json(
      { error: "Post not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(post);
}

