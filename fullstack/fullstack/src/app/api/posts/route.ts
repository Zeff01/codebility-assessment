import { NextResponse } from 'next/server';
import { posts } from 'aelladev/data/posts';

export async function GET() {
  return NextResponse.json(posts);
}