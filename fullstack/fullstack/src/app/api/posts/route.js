import { posts } from "@/data/posts"

export async function GET() {
  if (posts.length === 0)
    return new Response(JSON.stringify({ message: "No posts found" }), {
      status: 404,
    })

  return Response.json(posts)
}
