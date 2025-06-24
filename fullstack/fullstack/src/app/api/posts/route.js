import { posts } from '../../data/posts.js';
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json(posts);
}
