import { posts } from "@/data/post";
import { NextRequest, NextResponse } from "next/server";

// GET
export async function GET() {
  return Response.json(posts);
}

// POST
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, excerpt, content } = body;
  if (!title || !excerpt || !content) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }

  try {
    const newPost = {
      id: posts.length + 1,
      title,
      excerpt,
      content,
      date: new Date().toISOString(),
    };
    posts.push(newPost);
    return NextResponse.json({ posts: newPost }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  }
}
