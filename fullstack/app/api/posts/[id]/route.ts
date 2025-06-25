import { posts } from "@/app/data/posts";
import { NextResponse } from "next/server";
import { PostTypes } from "@/app/types";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: RouteParams
): Promise<
  NextResponse<
    { success: boolean; data: PostTypes } | { success: boolean; error: string }
  >
> {
  try {
    const resolvedParams = await params;
    const postId = parseInt(resolvedParams.id);
    if (isNaN(postId)) {
      return NextResponse.json(
        { success: false, error: "Invalid post ID" },
        { status: 400 }
      );
    }
   
    const post = posts.find((p) => p.id === postId);
    if (!post) {
      return NextResponse.json(
        { success: false, error: "Post not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: post });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}
