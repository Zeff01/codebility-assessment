import { posts } from "../../data/posts";

export async function GET(request) {
  return new Response(JSON.stringify(posts), {
    headers: { "Content-Type": "application/json" },
  });
}
