import { NextResponse } from "next/server";
import { posts } from "../../../../../data/posts"; // adjust path depende sa folder structure

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const post = posts.find((p) => p.id === parseInt(params.id));
  if (!post) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }
  return NextResponse.json(post);
}
