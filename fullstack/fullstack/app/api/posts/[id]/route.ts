import { NextRequest, NextResponse } from 'next/server';
import { posts } from '@/app/data/posts';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: number } }
) {
    // Destructure the id from params
    const { id } = await params;

    try {
        // Find the post by matching the id
        const post = posts.find((p) => p.id === Number(id));
        
        // Return 404 if post doesn't exist
        if (!post) {
            return NextResponse.json(
                { error: 'Post Not Found' },
                { status: 404 }
            );
        }
        
        // Return the post data
        return NextResponse.json(post);
    } catch (error) {
        // Handle any errors during the process
        return NextResponse.json(
            { error: 'Failed to fetch post' },
            { status: 500 }
        );
    }
}

