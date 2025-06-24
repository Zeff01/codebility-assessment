import { posts } from "@/app/data/posts";
import { Post } from "@/app/types/post";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<Post[] | { error: string }>> {
  try {
    // Sort posts by date (newest first)
    const sortedPosts = [...posts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return NextResponse.json(sortedPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: Request
): Promise<NextResponse<{ message: string; post: Post } | { error: string }>> {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.excerpt || !body.content || !body.author) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create new post with auto-generated ID
    const newPost: Post = {
      id: Math.max(...posts.map((p) => p.id)) + 1,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      author: body.author,
      date: new Date().toISOString().split("T")[0], // YYYY-MM-DD format
    };

    // For demo purposes, we'll just add to the array
    posts.push(newPost);

    return NextResponse.json(
      { message: "Post created", post: newPost },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
