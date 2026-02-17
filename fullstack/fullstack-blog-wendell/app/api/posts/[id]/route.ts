import { NextResponse } from "next/server";
import { posts } from "@/data/posts";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }, // Await params for Next.js 16
) {
  const { id } = await params;
  // Convert id to number if your data uses numbers for IDs
  const post = posts.find((p) => p.id === id); // String === String

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}
