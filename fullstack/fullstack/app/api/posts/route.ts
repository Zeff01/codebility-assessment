import { NextResponse } from 'next/server';
import { posts } from '@/app/lib/data/posts';

export async function GET() {
  return NextResponse.json(posts);
}
