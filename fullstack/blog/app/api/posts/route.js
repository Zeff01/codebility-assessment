import { NextResponse } from 'next/server';
import { posts } from '@/data/posts';

// GET /api/posts - Returns all posts or a specific post if ID is provided as a query param
export async function GET(request, Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const post = posts.find((p) => p.id.toString() === id);
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json(post);
  }

  return NextResponse.json(posts);
}