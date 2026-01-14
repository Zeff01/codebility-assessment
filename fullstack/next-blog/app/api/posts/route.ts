import { NextResponse } from "next/server";
import { posts } from "@/data/posts";

export async function GET(req: Request) {
  try {
    // filter out unneeded data. the homepage only needs the ID, title and excerpt

    const data = posts.map((p) => ({
      id: p.id,
      title: p.title,
      excerpt: p.excerpt,
    }));
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err }, { status: 400 });
  }
}
