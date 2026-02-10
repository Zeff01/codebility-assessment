import { posts } from "@/app/data/posts";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(posts);
}
