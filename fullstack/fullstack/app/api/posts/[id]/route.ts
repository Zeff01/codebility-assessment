import { posts } from "@/data/posts";
import { NextResponse } from "next/server";

type RouteParams = {
  params: Promise<{ id: string }>;
};

export async function GET(req: Request, { params }: RouteParams) {
  const { id } = await params;
  const postId = Number(id);

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}
