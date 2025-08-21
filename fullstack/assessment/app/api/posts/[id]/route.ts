import { posts } from "@/lib/dummyData";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return new Response(JSON.stringify({ message: "Post not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(post), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
