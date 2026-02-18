import { prisma } from "@/app/lib/prisma";
import { authOptions } from "@/app/lib/auth"; // Ensure this path is correct
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// Get all tasks

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const todos = await prisma.todos.findMany({
      where: { user_id: session.user.id },
      orderBy: { updated_at: "desc" },
    });

    return NextResponse.json({ success: true, data: todos });
  } catch (err) {
    console.error("GET ERROR:", err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch todos" },
      { status: 500 },
    );
  }
}

// New task

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const { task } = await req.json();

    if (!task) {
      return NextResponse.json(
        { success: false, error: "Task is empty" },
        { status: 400 },
      );
    }

    const newTodo = await prisma.todos.create({
      data: {
        task,
        is_completed: false,
        user_id: session.user.id,
      },
    });

    return NextResponse.json({ success: true, data: newTodo });
  } catch (err) {
    console.error("PRISMA ERROR:", err);
    return NextResponse.json(
      { success: false, error: "Database error" },
      { status: 500 },
    );
  }
}
