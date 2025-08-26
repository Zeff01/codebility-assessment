import { posts } from "@/data/posts";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === parseInt(id));
  
  if (!post) {
    return new Response("Not found", { status: 404 });
  }
  return Response.json(post);
}
