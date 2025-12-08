import { posts } from "../../../data/posts";

export function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return new Response(JSON.stringify({ message: "Not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(post), {
    headers: { "Content-Type": "application/json" },
  });
}

