// src/app/api/posts/route.ts

import { posts } from "aelladev/data/posts"; // @ = aelladev/
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(posts);
}
