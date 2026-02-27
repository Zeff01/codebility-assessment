import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import type { TodoItem, ApiResponse } from "@/types/index";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const body = await req.json();
    const { title, completed } = body;

    // Verify todo exists and belongs to user
    const existingTodo = await prisma.todo.findFirst({
      where: { id, userId: session.user.id },
    });

    if (!existingTodo) {
      return NextResponse.json(
        { error: "Todo not found" },
        { status: 404 }
      );
    }

    // Prepare update data
    const updateData: { title?: string; completed?: boolean } = {};

    if (title !== undefined) {
      if (typeof title !== "string") {
        return NextResponse.json(
          { error: "Title must be a string" },
          { status: 400 }
        );
      }

      const trimmedTitle = title.trim();

      if (!trimmedTitle) {
        return NextResponse.json(
          { error: "Title cannot be empty or whitespace only" },
          { status: 400 }
        );
      }

      updateData.title = trimmedTitle;
    }

    if (completed !== undefined) {
      updateData.completed = completed;
    }

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        title: true,
        completed: true,
        createdAt: true,
        updatedAt: true,
        userId: true,
      },
    });

    return NextResponse.json<ApiResponse<TodoItem>>({ data: updatedTodo });
  } catch (error) {
    console.error("PATCH /api/todos/[id] error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    // Verify todo exists and belongs to user
    const existingTodo = await prisma.todo.findFirst({
      where: { id, userId: session.user.id },
    });

    if (!existingTodo) {
      return NextResponse.json(
        { error: "Todo not found" },
        { status: 404 }
      );
    }

    const deletedTodo = await prisma.todo.delete({
      where: { id },
      select: {
        id: true,
        title: true,
        completed: true,
        createdAt: true,
        updatedAt: true,
        userId: true,
      },
    });

    return NextResponse.json<ApiResponse<TodoItem>>({ data: deletedTodo });
  } catch (error) {
    console.error("DELETE /api/todos/[id] error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
