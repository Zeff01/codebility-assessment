import { NextResponse } from "next/server";
import { posts } from "@/data/posts";

interface RouteProps {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: RouteProps
) {
  const { id } = await params;

  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return NextResponse.json(
      { message: "Post not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(post);
}