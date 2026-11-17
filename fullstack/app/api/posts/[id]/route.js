import { NextResponse } from "next/server";
import { posts } from "../../../../data/posts"

export async function GET(request, { params }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}
