import { NextResponse } from "next/server";
import { posts } from "@/data/posts";

export async function GET(request, { params }) {
  const { id } = await params;

  const post = posts.find((item) => item.id === Number(id));

  if (!post) {
    return NextResponse.json(
      {
        success: false,
        message: "Post not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: post,
  });
}