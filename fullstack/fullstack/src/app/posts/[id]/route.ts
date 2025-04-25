// src/app/api/posts/[id]/route.ts
import { posts } from '@/data/posts';
import { NextResponse } from 'next/server';

interface Params {
  params: {
    id: string;
  };
}

// GET /api/posts/[id] - Returns a single post by ID
export async function GET(
  request: Request,
  { params }: Params
): Promise<NextResponse> {
  const id = parseInt(params.id);
  const post = posts.find(p => p.id === id);
  
  if (!post) {
    return NextResponse.json(
      { error: 'Post not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(post);
}