import { posts } from "@/app/data/posts";

export async function GET(req, { params }) {
  const { id } = params;
  const post = posts.find((post) => post.id === parseInt(id));

  if (post) {
    return new Response(JSON.stringify(post), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    return new Response(JSON.stringify({ message: "Post not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
