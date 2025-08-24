import { NextResponse } from "next/server";
import { posts } from "@/data/posts";

type RouteParams = {
    id: string;
    };
export async function GET(request: Request, { params }: { params: RouteParams }) {
    const { id } = await params;
    const post = posts.find((p) => p.id === Number.parseInt(id));
    if (!post) {
        return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post);
}