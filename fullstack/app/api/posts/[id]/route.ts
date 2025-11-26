import { posts } from "@/data/posts";

interface RouteParams {
    params: { id: string };
  }
  
  export async function GET(request: Request, { params }: RouteParams) {
    const post = posts.find((p) => p.id === params.id);
  
    if (!post) {
      return new Response("Post not found", { status: 404 });
    }
  
    return Response.json(post);
  }