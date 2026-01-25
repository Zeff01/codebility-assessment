import { posts } from '@/app/api/data/posts'
import { NextRequest } from 'next/server'
import { Post } from '@/app/types/post'

export async function GET(req: NextRequest, { params }: {params: Promise<{id: string }>}) {

    const { id } = await params;
    // Find the post from local array
    const post = posts.find((post: Post) => post.id === parseInt(id))

    if (!post) {
        return new Response(
        JSON.stringify({
            success: false,
            status: 404,
            message: `Post with id ${id} not found`,
        }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
    }

    return new Response(
        JSON.stringify({
            success: true,
            status: 200,
            data: post,
            message: 'Post retrieved successfully.'
        }),
        { status: 200, headers: { 'Content-type': 'application/json'}}
    )
}
