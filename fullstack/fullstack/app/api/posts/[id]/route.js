import { posts } from "@/data/posts";

export async function GET(req) {
  const id = Number(req.nextUrl.pathname.split("/").pop());
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return new Response(JSON.stringify({ error: "Post not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(post), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
