import { NextRequest, NextResponse } from "next/server";
import { posts } from "@/lib/post";

interface Context {
  params: { id: string };
}

export async function GET(request: NextRequest, context: Context) {
  try {
    const { id } = context.params;
    const post = posts.find((post) => post.id === parseInt(id));

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}
