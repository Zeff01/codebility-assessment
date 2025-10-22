import { NextResponse } from "next/server";
import { posts } from "@/data/posts";

// small helper to simulate latency in dev
const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function GET() {
  const ms = Number(process.env.MOCK_API_DELAY_MS ?? 250);
  if (ms > 0) await delay(ms);

  return NextResponse.json({ data: posts, meta: { count: posts.length } });
}
