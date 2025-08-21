import { posts } from "@/lib/dummyData";

export async function GET() {
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
