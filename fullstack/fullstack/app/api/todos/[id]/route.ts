import { prisma } from "@/app/lib/prisma";
import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// Edit task

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const session = await getServerSession(authOptions);
    const { id } = await params;
    const body = await req.json();
    const { is_completed, task } = body;

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const updatedTodo = await prisma.todos.update({
      where: {
        id: id,
        user_id: session.user.id, // This must match exactly
      },
      data: {
        ...(is_completed !== undefined && { is_completed }),
        ...(task !== undefined && { task }),
      },
    });

    return NextResponse.json({ success: true, data: updatedTodo });
  } catch (err) {
    console.error("PATCH Error Detail:");

    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

// Delete task

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const { id } = await params;

    // Security: Only delete if the todo belongs to this user
    await prisma.todos.delete({
      where: {
        id: id,
        user_id: session.user.id, // Critical: Google ID check
      },
    });

    return NextResponse.json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (err) {
    console.error("Delete Error:");
    return NextResponse.json(
      { success: false, error: "Delete failed: task not found" },
      { status: 500 },
    );
  }
}
