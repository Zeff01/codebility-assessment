import { NextResponse } from "next/server";
import { posts } from "@/lib/post";

export async function GET() {
  try {
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
