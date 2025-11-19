import { posts } from "../../../../data/posts";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return new Response(JSON.stringify({ message: "Not found" }), {
      status: 404,
    });
  }

  return Response.json(post);
}
