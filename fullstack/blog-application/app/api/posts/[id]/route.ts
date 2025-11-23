import { NextResponse } from "next/server";
import { posts } from "@/app/data/posts";

type RouteContext = {
  params: {
    id: string;
  };
};

export async function GET(_request: Request, { params }: RouteContext) {
  const id = Number(params.id);
  const post = posts.find((entry) => entry.id === id);

  if (!post) {
    return NextResponse.json(
      { message: `Post ${params.id} not found` },
      { status: 404 }
    );
  }

  return NextResponse.json(post);
}
