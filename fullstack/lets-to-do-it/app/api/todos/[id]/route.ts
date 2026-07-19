import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params
  const { completed } = await req.json()

  const todo = await prisma.todo.update({
    where: { id },
    data: { completed },
  })

  return NextResponse.json(todo)
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params

  await prisma.todo.delete({
    where: { id },
  })

  return NextResponse.json({ success: true })
}