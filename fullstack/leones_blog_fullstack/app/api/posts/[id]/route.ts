import { posts } from "@/data/posts";
import { NextResponse } from "next/server";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

// Get specific post by id
export async function GET(request: Request, { params }: Params) {
  const { id } = await params;

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    message: "Fetched data successfully",
    post,
  });
}
