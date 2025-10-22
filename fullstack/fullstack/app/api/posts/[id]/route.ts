import { NextResponse } from "next/server";
import { posts } from "@/data/posts";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function GET(context: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const ms = Number(process.env.MOCK_API_DELAY_MS ?? 150);
  if (ms > 0) await delay(ms);

  const { params } = context;
  const { id: idStr } = (await params) as { id: string };
  const id = Number(idStr);

  const post = posts.find((p) => p.id === id);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ data: post });
}
