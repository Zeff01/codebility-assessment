import { NextResponse } from "next/server";
import { posts } from "../../../../data/posts";

/**
 * GET /api/posts/[id]
 * Returns a single blog post by its numeric ID.
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const numericId = Number(id);

  if (isNaN(numericId)) {
    return NextResponse.json(
      { success: false, error: "Invalid ID — must be a number." },
      { status: 400 },
    );
  }

  const post = posts.find((p) => p.id === numericId);

  if (!post) {
    return NextResponse.json(
      { success: false, error: `Post with id ${numericId} not found.` },
      { status: 404 },
    );
  }

  return NextResponse.json({ success: true, data: post }, { status: 200 });
}
