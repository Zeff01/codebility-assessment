import { posts } from "../../data/posts";

export async function GET(request, { params }) {
  const post = posts.find((p) => p.id === parseInt(params.id));
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
