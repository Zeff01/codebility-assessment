import { posts } from "../../../data/posts";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));
  // console.log("post: ", post);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}
