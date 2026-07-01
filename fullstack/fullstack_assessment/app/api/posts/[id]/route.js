import { posts } from "@/data/posts";

export async function GET(request, { params }) {
  const resolvedParams = await params;
  //console.log(resolvedParams)
  let post;

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === Number(resolvedParams.id)) {
      post = posts[i];
    }
  }

  //console.log(post)

  if (!post) {
    return Response.json({ message: "Post not found" }, { status: 404 });
  }

  return Response.json(post);
}
