import { NextResponse } from 'next/server';
import { posts } from '../../../../data/post';

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  // Await the params Promise
  const { id } = await params;
  const post = posts.find(p => p.id === parseInt(id));
  
  if (!post) {
    return NextResponse.json(
      { error: 'Post not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(post);
}