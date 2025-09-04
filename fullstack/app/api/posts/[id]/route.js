import { posts } from '@/app/data/posts';

export async function GET(request, { params }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return Response.json({ error: 'Post not found' }, { status: 404 });
  }

  return Response.json(post);
}
