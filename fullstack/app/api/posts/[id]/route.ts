import { posts } from "../../../../data/posts";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));
  if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });
  return NextResponse.json(post);
}