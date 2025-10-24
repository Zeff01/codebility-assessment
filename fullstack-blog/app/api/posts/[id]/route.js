import { posts } from "@/data/posts";

export async function GET(request, context) {
  const { id } = await context.params;   

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return new Response(JSON.stringify({ error: "Post not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(post), {
    headers: { "Content-Type": "application/json" },
  });
}