import { posts } from "@/app/data/posts";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
