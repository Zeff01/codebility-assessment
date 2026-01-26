import { NextResponse } from "next/server";
import { posts } from "@/data/posts";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const postId = parseInt(id, 10);

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

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}

