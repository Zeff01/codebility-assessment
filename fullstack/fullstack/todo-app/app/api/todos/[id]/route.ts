import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  const { id } = await params;

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const todo = await prisma.todo.findFirst({
    where: { id, userId: session.user.id },
  });

  if (!todo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  const body = await request.json();
  const { completed, title } = body;

  const updateData: { completed?: boolean; title?: string } = {};
  if (completed !== undefined) updateData.completed = completed;
  if (title !== undefined) updateData.title = title.trim();

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: updateData,
  });

  return NextResponse.json(updatedTodo);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  const { id } = await params;

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const todo = await prisma.todo.findFirst({
    where: { id, userId: session.user.id },
  });

  if (!todo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  await prisma.todo.delete({
    where: { id },
  });

  return NextResponse.json({ success: true });
}
