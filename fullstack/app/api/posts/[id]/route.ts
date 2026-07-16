import { NextResponse } from "next/server";
import { posts } from "@/data/posts";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const postId = parseInt(id, 10);
    const post = posts.find((p) => p.id === postId);

    if (!post) {
        return NextResponse.json({ message: "Post not found" }, {
            status: 404
        });
    }

    return NextResponse.json(post);
}