import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return NextResponse.json(
            { error: "Unauthorized", description: "You must be logged in to view todos", status: 401 },
            { status: 401 }
        );
    }

    try {
        const todos = await prisma.todo.findMany({
            where: {
                userId: session.user.id,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(todos);
    } catch (error) {
        console.error("[TODOS_GET]", error);
        return NextResponse.json(
            { error: "Internal Error", description: "An unexpected error occurred while fetching todos", status: 500 },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return NextResponse.json(
            { error: "Unauthorized", description: "You must be logged in to create a todo", status: 401 },
            { status: 401 }
        );
    }

    try {
        const body = await req.json();
        const { title } = body;

        if (!title) {
            return NextResponse.json(
                { error: "Bad Request", description: "Title is required", status: 400 },
                { status: 400 }
            );
        }

        const todo = await prisma.todo.create({
            data: {
                title,
                userId: session.user.id,
            },
        });

        return NextResponse.json(todo);
    } catch (error) {
        console.error("[TODOS_POST]", error);
        return NextResponse.json(
            { error: "Internal Error", description: "An unexpected error occurred while creating the todo", status: 500 },
            { status: 500 }
        );
    }
}
