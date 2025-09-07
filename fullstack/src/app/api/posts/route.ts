import { NextResponse } from "next/server";
import { posts } from "../../../../data/posts"; // adjust path depende sa folder structure

export async function GET() {
  return NextResponse.json(posts);
}
