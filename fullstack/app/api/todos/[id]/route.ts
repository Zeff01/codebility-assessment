import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return NextResponse.json(
            { error: "Unauthorized", description: "You must be logged in to update a todo", status: 401 },
            { status: 401 }
        );
    }

    try {
        const { id } = await params;
        const body = await req.json();
        const { title, completed } = body;

        // Check ownership
        const existingTodo = await prisma.todo.findUnique({
            where: { id },
        });

        if (!existingTodo) {
            return NextResponse.json(
                { error: "Not Found", description: "Todo item not found", status: 404 },
                { status: 404 }
            );
        }

        if (existingTodo.userId !== session.user.id) {
            return NextResponse.json(
                { error: "Forbidden", description: "You do not have permission to update this todo", status: 403 },
                { status: 403 }
            );
        }

        const todo = await prisma.todo.update({
            where: {
                id,
            },
            data: {
                title,
                completed,
            },
        });

        return NextResponse.json(todo);
    } catch (error) {
        console.error("[TODO_UPDATE]", error);
        return NextResponse.json(
            { error: "Internal Error", description: "An unexpected error occurred while updating the todo", status: 500 },
            { status: 500 }
        );
    }
}

export async function DELETE(
    _req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return NextResponse.json(
            { error: "Unauthorized", description: "You must be logged in to delete a todo", status: 401 },
            { status: 401 }
        );
    }

    try {
        const { id } = await params;
        // Check ownership
        const existingTodo = await prisma.todo.findUnique({
            where: { id },
        });

        if (!existingTodo) {
            return NextResponse.json(
                { error: "Not Found", description: "Todo item not found", status: 404 },
                { status: 404 }
            );
        }

        if (existingTodo.userId !== session.user.id) {
            return NextResponse.json(
                { error: "Forbidden", description: "You do not have permission to delete this todo", status: 403 },
                { status: 403 }
            );
        }

        await prisma.todo.delete({
            where: {
                id,
            },
        });

        return NextResponse.json({ message: "Deleted" });
    } catch (error) {
        console.error("[TODO_DELETE]", error);
        return NextResponse.json(
            { error: "Internal Error", description: "An unexpected error occurred while deleting the todo", status: 500 },
            { status: 500 }
        );
    }
}
