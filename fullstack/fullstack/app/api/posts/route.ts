import { posts } from '@/app/api/data/posts'

export async function GET() {
    return new Response(
        JSON.stringify({
            success: true,
            status: 200,
            data: posts,
            message: 'Post retrieved successfully.'
        }),
        { status: 200, headers: { 'Content-type': 'application/json'}}
    )
}
