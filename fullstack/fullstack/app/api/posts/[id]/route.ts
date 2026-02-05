import { NextResponse } from 'next/server';
import { posts } from '@/app/lib/data/posts';

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: RouteParams
) {
  const { id } = await params;
  await new Promise(resolve => setTimeout(resolve, 100));
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return NextResponse.json(
      { error: 'Post not found' }, 
      { status: 404 }
    );
  }
  
  return NextResponse.json(post);
}