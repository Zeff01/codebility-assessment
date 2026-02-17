import { NextResponse } from "next/server";
import { posts } from "@/data/posts"; // Direct import here!

export async function GET() {
  return NextResponse.json(posts);
}
