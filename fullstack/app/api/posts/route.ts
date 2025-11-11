import { posts } from "@/data/posts";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const url = new URL(req.url)
    const id = url.searchParams.get("id")

    if (id) {
        const post = posts.find(p => p.id === Number(id))
        return NextResponse.json(post || {})
    }

    return NextResponse.json(posts)
}