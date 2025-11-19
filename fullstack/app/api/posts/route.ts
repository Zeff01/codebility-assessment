import { NextResponse } from "next/server";
import { posts } from "../../../data/posts";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (id) {
    const post = posts.find((p) => p.id === Number(id));
    if (!post) return NextResponse.json({ message: "Post not found" }, { status: 404 });
    return NextResponse.json(post);
  }

  return NextResponse.json(posts);
}
