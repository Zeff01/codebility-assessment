import { posts } from '@/app/data/posts';
import { NextResponse } from 'next/server';

// GET endpoint handler for retrieving all posts
export async function GET(request: Request) {
    // Return posts as JSON with 200 status code
    return NextResponse.json(posts, { status: 200 });
}
