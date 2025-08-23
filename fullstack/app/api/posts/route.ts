import { posts } from "@/data/posts";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: "Failed to fetch" });
  }
}
