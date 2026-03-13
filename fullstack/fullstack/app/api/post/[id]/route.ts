import { getPostById } from '@/data/posts'
import { NextResponse } from 'next/server'

interface RouteProps {
  params: Promise<{
    id: string
  }>
}

export async function GET(
  request: Request,
  props: RouteProps
) {
  const params = await props.params
  const id = Number(params.id)

  const post = getPostById(id)

  if (!post) {
    return NextResponse.json(
      { error: 'Post not found' },
      { status: 404 }
    )
  }

  return NextResponse.json(post)
}
