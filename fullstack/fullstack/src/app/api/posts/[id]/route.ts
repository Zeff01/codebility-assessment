import { NextResponse } from 'next/server';
import { posts } from 'aelladev/data/posts';

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: RouteParams) {
  const post = posts.find(p => p.id === parseInt(params.id));

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json(post);
}