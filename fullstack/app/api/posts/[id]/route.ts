import { posts } from "@/data/posts";
import { NextResponse } from 'next/server';

export function generateStaticParams() {
  return posts.map(val => ({id: String(val.id)}))
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;
  const blogPost: BlogPostsDataObject | undefined = posts[Number(id) - 1];

  if (!blogPost) return NextResponse.json({ message: "Not Found" }, { status: 404 })

  return Response.json(blogPost);
}
