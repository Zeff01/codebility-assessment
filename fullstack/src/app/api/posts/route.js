import { posts } from "../../data/posts";

export async function GET(req) {
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }