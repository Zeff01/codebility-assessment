import { posts } from "@/data/posts";

export function GET() {
  return Response.json(posts);
}