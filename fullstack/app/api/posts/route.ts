import { NextResponse } from "next/server";
import { posts } from "@/data/posts";

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(posts);
}