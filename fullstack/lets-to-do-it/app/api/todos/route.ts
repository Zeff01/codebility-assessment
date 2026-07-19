import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const todos = await prisma.todo.findMany({
    where: {
      user: { email: session.user.email },
    },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(todos)
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { title } = await req.json()

  if (!title?.trim()) {
    return NextResponse.json({ error: 'Title is required' }, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  })

  const todo = await prisma.todo.create({
    data: {
      title: title.trim(),
      userId: user!.id,
    },
  })

  return NextResponse.json(todo)
}