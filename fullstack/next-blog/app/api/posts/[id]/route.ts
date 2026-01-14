import { NextResponse } from "next/server";
import { posts } from "@/data/posts";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const post_id = Number(id); // typecast parameter to a number

    const post = posts.filter((post) => post.id === post_id);

    if (post.length == 0)
      return NextResponse.json({ message: "No post found!" }, { status: 404 });

    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err }, { status: 400 });
  }
}
