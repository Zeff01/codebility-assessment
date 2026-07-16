import { NextResponse } from "next/server";

import { allowedStatusTransitions, canDeleteTodo, canEditTodo, canReadTodo } from "@/lib/authorization";
import { getCurrentUser } from "@/lib/current-user";
import { prisma } from "@/lib/prisma";
import { serializeTodo } from "@/lib/serialize-todo";
import { updateTodoSchema } from "@/lib/validations/todo";

const OWNER_SELECT = {
  user: { select: { id: true, name: true, groupId: true } },
} as const;

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const parsed = updateTodoSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0].message },
      { status: 400 }
    );
  }

  const todo = await prisma.todo.findUnique({ where: { id }, include: OWNER_SELECT });
  const owner = todo ? { id: todo.user.id, groupId: todo.user.groupId } : null;

  if (!todo || !owner || !canReadTodo(currentUser, owner)) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  const { title, status } = parsed.data;

  if (title !== undefined && !canEditTodo(currentUser, todo.userId)) {
    return NextResponse.json(
      { error: "Only the owner or an admin can rename this todo" },
      { status: 403 }
    );
  }

  if (status !== undefined && !allowedStatusTransitions(currentUser, owner).includes(status)) {
    return NextResponse.json(
      { error: "You don't have permission to set this status" },
      { status: 403 }
    );
  }

  const updated = await prisma.todo.update({
    where: { id },
    data: { title, status },
    include: OWNER_SELECT,
  });

  return NextResponse.json({ todo: serializeTodo(updated, currentUser) });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const todo = await prisma.todo.findUnique({ where: { id }, include: OWNER_SELECT });
  const owner = todo ? { id: todo.user.id, groupId: todo.user.groupId } : null;

  if (!todo || !owner || !canReadTodo(currentUser, owner)) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  if (!canDeleteTodo(currentUser, todo.userId)) {
    return NextResponse.json(
      { error: "Only the owner or an admin can delete this todo" },
      { status: 403 }
    );
  }

  await prisma.todo.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
