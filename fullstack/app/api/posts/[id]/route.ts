import { posts } from "@/data/posts";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;
    const postId = Number(id);
    const post = posts.find((p) => p.id === postId);

    if (!post) {
        return NextResponse.json(
            { message: "Post not found" },
            { status: 404 },
        );
    }

    return NextResponse.json(post);
}
