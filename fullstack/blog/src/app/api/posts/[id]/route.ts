import { NextResponse } from "next/server";
import { posts } from "@/data/posts";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const post = posts.find((p) => p.id === Number(params.id));

  if (!post) {
    return NextResponse.json(
      { message: "Post not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(post);
}
