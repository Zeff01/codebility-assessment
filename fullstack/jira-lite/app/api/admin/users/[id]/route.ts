import { NextResponse } from "next/server";

import { isAdmin } from "@/lib/authorization";
import { getCurrentUser } from "@/lib/current-user";
import { prisma } from "@/lib/prisma";
import { updateUserSchema } from "@/lib/validations/admin";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser || !isAdmin(currentUser)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { id } = await params;
  const body = await request.json();
  const parsed = updateUserSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0].message },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const { role, groupId } = parsed.data;

  if (groupId) {
    const group = await prisma.group.findUnique({ where: { id: groupId } });
    if (!group) {
      return NextResponse.json({ error: "Group not found" }, { status: 400 });
    }
  }

  const updated = await prisma.user.update({
    where: { id },
    data: {
      ...(role !== undefined ? { role } : {}),
      ...(groupId !== undefined ? { groupId } : {}),
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      groupId: true,
      group: { select: { id: true, name: true } },
    },
  });

  return NextResponse.json({ user: updated });
}
