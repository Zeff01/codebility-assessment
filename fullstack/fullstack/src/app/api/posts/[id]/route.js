import { posts } from '../../../data/posts.js';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    const id = parseInt(params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
}
