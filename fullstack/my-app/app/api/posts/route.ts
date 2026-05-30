import { NextResponse } from "next/server";
import { posts } from "../../data/posts";

export async function GET() {
  // Returns all posts with a 200 OK status
  return NextResponse.json(posts);
}