import { posts } from "@/data/posts";

export async function GET() {
  return Response.json(posts, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
