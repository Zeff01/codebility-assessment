import { NextResponse } from "next/server";

import { isAdmin } from "@/lib/authorization";
import { getCurrentUser } from "@/lib/current-user";
import { prisma } from "@/lib/prisma";
import { createGroupSchema } from "@/lib/validations/admin";

export async function GET() {
  const currentUser = await getCurrentUser();
  if (!currentUser || !isAdmin(currentUser)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const groups = await prisma.group.findMany({
    include: { _count: { select: { members: true } } },
    orderBy: { name: "asc" },
  });

  return NextResponse.json({
    groups: groups.map((group) => ({
      id: group.id,
      name: group.name,
      memberCount: group._count.members,
    })),
  });
}

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser || !isAdmin(currentUser)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await request.json();
  const parsed = createGroupSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0].message },
      { status: 400 }
    );
  }

  const existing = await prisma.group.findUnique({ where: { name: parsed.data.name } });
  if (existing) {
    return NextResponse.json(
      { error: "A group with this name already exists" },
      { status: 409 }
    );
  }

  const group = await prisma.group.create({ data: { name: parsed.data.name } });

  return NextResponse.json(
    { group: { id: group.id, name: group.name, memberCount: 0 } },
    { status: 201 }
  );
}
