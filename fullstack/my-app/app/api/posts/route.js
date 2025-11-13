// app/api/posts/route.js
import { posts } from "../../../data/posts";

export async function GET(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (id) {
    const post = posts.find((p) => p.id === Number(id));
    if (!post) {
      return new Response(JSON.stringify({ message: "Post not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(post), { status: 200 });
  }

  return new Response(JSON.stringify(posts), { status: 200 });
}
