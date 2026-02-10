import { posts } from "@/app/data/posts";
import { NextResponse } from "next/server";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(_request: Request, { params }: Props) {
  const { id } = await params;
  const numericId = Number(id);
  const post = posts.find((post) => post.id === numericId);

  if (!post) {
    return NextResponse.json(
      {
        message: "Post not found",
      },
      {
        status: 404,
      },
    );
  }

  return NextResponse.json(post, { status: 200 });
}
