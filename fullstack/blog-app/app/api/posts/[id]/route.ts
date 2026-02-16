import { posts } from "@/data/posts";

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: RouteParams) {
  const id = parseInt(params.id, 10);

  if (isNaN(id)) {
    return Response.json(
      { error: "Invalid post ID" },
      { status: 400 }
    );
  }

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return Response.json(
      { error: "Post not found" },
      { status: 404 }
    );
  }

  return Response.json(post, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
