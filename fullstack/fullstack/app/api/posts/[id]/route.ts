import { NextResponse } from "next/server";
import { posts } from "@/data/posts";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: idParam } = await params;
  const id = parseInt(idParam);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return new NextResponse("Post not found", { status: 404 });
  }

  return NextResponse.json(post);
}
