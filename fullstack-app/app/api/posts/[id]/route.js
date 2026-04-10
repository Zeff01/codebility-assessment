import { posts } from "../../../../data/posts";

export async function GET(request, context) {
  const id = context?.params?.id ?? new URL(request.url).pathname.split("/").pop();
  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) {
    return Response.json({ message: "Post not found" }, { status: 404 });
  }

  return Response.json(post);
}