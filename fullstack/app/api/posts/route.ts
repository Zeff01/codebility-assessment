import { NextResponse } from "next/server";
import { posts } from "@/data/posts";

export async function GET() {
  try {
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

