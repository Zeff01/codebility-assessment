import { posts } from "@/data/posts";

export async function GET() {
  return Response.json(posts);
}