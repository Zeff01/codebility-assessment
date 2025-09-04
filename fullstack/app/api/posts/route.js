import { posts } from '@/app/data/posts';

export async function GET() {
  return Response.json(posts);
}
