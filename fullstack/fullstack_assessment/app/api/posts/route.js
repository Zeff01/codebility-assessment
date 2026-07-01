import { posts } from "@/data/posts";

export async function GET(request) {

  

  return Response.json(posts);
}