import { NextResponse } from "next/server";

import { visibleColumnsFor } from "@/lib/authorization";
import { getCurrentUser } from "@/lib/current-user";
import { prisma } from "@/lib/prisma";
import { serializeTodo } from "@/lib/serialize-todo";
import { createTodoSchema } from "@/lib/validations/todo";

const OWNER_SELECT = {
  user: { select: { id: true, name: true, groupId: true } },
} as const;

export async function GET() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const todos = await prisma.todo.findMany({
    where: {
      status: { in: visibleColumnsFor(currentUser.role) },
      ...(currentUser.role === "ADMIN"
        ? {}
        : {
            OR: [
              { userId: currentUser.id },
              ...(currentUser.groupId
                ? [{ user: { groupId: currentUser.groupId } }]
                : []),
            ],
          }),
    },
    include: OWNER_SELECT,
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({
    todos: todos.map((todo) => serializeTodo(todo, currentUser)),
  });
}

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = createTodoSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0].message },
      { status: 400 }
    );
  }

  const { title, description, problem, acceptanceCriteria, technicalImplementation, points } =
    parsed.data;

  const todo = await prisma.todo.create({
    data: {
      title,
      description,
      problem,
      acceptanceCriteria,
      technicalImplementation,
      points,
      userId: currentUser.id,
      status: currentUser.role === "QA" ? "READY_FOR_TESTING" : "TO_DO",
    },
    include: OWNER_SELECT,
  });

  return NextResponse.json(
    { todo: serializeTodo(todo, currentUser) },
    { status: 201 }
  );
}
