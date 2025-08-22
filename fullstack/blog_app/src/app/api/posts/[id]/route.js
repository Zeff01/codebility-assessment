import { posts } from "../../../data/posts";

export async function GET(req, context) {
  const { id } = await context.params; // ✅ await params
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return new Response("Post not found", { status: 404 });
  return Response.json(post);
}
