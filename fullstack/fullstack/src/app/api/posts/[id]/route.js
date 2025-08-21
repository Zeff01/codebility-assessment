import { posts } from "@/data/posts"

export async function GET(req, { params }) {
  const { id } = await params
  const post = posts.find((post) => post.id == id)

  if (!post)
    return Response(JSON.stringify({ error: "Post not found" }), {
      status: 404,
    })

  return Response.json(post)
}
