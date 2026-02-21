import { NextResponse } from "next/server";
import { posts } from "../../../data/posts"; // Mock data

/*
In Next.js, we cannot use the same route.ts file.
We need a special folder name with brackets to tell Next.js:
"This part of the URL is a variable."

The "context" argument gives access to the dynamic ID
The directory is named [id], therefore, Next.js names the key as id
If it was named [postId], you would look for params.postId
*/

export async function GET(
  request: Request,
  context: { params: Promise<{ id: number }> },
) {
  // Await the params to "unwrap" the Promise
  const params = await context.params;

  // Access .id safely
  const targetId = Number(params.id); // Typecast from string to number

  /*
  When a web server extracts a parameter from a URL path (/api/posts/1)
  it ALWAYS reads it as a string, so convert it to a number first
  */

  // Find the post with the targetId in the array
  const targetPost = posts.find((post) => post.id === targetId);

  if (targetPost) {
    return NextResponse.json(targetPost); // If found, return the post
  } else {
    return NextResponse.json({ message: "Post not found." }, { status: 404 });
  }
}
