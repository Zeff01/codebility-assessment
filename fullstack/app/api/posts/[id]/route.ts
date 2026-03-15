import { NextRequest, NextResponse } from "next/server";
import { posts } from "@/data/post";

export const GET = async (
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id: rawId } = await params;
  const id = Number(rawId);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(post);
};
