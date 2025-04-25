// src/app/api/posts/route.ts
import { posts } from '@/data/posts';
import { NextResponse } from 'next/server';

// GET /api/posts - Returns all posts
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(posts);
}