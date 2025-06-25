import { posts } from "@/data/post";
import { NextRequest, NextResponse } from "next/server";

// GET
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const post = posts.find((p) => p.id === parseInt(id));
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  try {
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

// PUT/UPDATE
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const body = await req.json();
  const index = posts.findIndex((p) => p.id === parseInt(id));

  if (index === -1) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  try {
    posts[index] = { ...posts[index], ...body };
    return NextResponse.json({ post: posts[index] }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

// DELETE
export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const index = posts.findIndex((p) => p.id === parseInt(id));

    if (index === -1) {
      return new Response(JSON.stringify({ error: "Post not found" }), {
        status: 404,
      });
    }

    posts.splice(index, 1);

    return new Response(JSON.stringify({ message: "Post deleted" }), {
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
