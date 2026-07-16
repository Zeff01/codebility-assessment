import { NextResponse } from "next/server";

import { isAdmin } from "@/lib/authorization";
import { getCurrentUser } from "@/lib/current-user";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const currentUser = await getCurrentUser();
  if (!currentUser || !isAdmin(currentUser)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      groupId: true,
      group: { select: { id: true, name: true } },
    },
    orderBy: { name: "asc" },
  });

  return NextResponse.json({ users });
}
