import { getPostById, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export async function GET(request, { params }) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    return Response.json({ error: "Post not found" }, { status: 404 });
  }

  return Response.json(post);
}