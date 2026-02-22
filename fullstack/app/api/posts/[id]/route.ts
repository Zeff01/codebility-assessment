import { NextResponse } from "next/server";
import { getPostById, posts } from "@/data/posts";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    const post = getPostById(Number(id));
    if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });
    return NextResponse.json({ post });
}