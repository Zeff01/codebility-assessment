import { NextResponse } from "next/server";
import { posts } from "@/data/posts";

type Params = { params: { id: string } };

export async function GET(req: Request, { params }: Params) {
  const post = posts.find((p) => p.id === Number(params.id));
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}
