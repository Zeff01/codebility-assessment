import { posts } from '@/data/posts'
import { NextResponse } from 'next/server'

// this will return all the posts
export async function GET() {
    return NextResponse.json(posts)
}
