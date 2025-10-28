import { posts } from '@/data/posts'
import { NextRequest, NextResponse } from 'next/server'

// this will return specific post based on id
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const post = posts.find((p) => p.id === Number(id))

    if (!post) {
        return NextResponse.json({ error: 'Post Not Found' }, { status: 404 })
    }

    return NextResponse.json(post)
}
