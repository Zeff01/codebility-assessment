import { NextResponse } from "next/server";
import { posts } from "@/data/posts";
import { error } from "console";

interface Props {
    params: Promise<{ id:string }>;
}

export async function GET(_request: Request, { params }: Props){
    const { id } = await params;
    const  post = posts.find((p) => p.id === Number(id));

    if (!post) {
        return NextResponse.json({error: "Post not found"}, { status: 404});
    }
    return NextResponse.json(post);
}

