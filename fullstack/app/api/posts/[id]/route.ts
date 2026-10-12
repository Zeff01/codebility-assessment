import { getPostById } from "@/data/posts";

export async function GET(
  _request: Request,
  ctx: RouteContext<"/api/posts/[id]">,
) {
  const { id } = await ctx.params;
  const post = getPostById(Number(id));

  if (!post) {
    return Response.json({ error: "Post not found" }, { status: 404 });
  }

  return Response.json(post);
}
