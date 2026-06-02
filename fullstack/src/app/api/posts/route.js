import { NextResponse } from "next/server";
import { posts } from "@/data/posts";

export async function GET() {
  return NextResponse.json({
    success: true,
    count: posts.length,
    data: posts,
  });
}