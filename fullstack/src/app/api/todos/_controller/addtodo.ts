import { NextResponse } from "next/server";
import { Session } from "next-auth";
import { db }    from "@/db";
import { todos } from "@/db/schema";
import { stringSanitizer } from "@/lib/validatorAndSanitizer";

export default async function AddTodo(session: Session, req: Request) {
    try {
        const { title }     = await req.json();
        const sanitizeTitle = stringSanitizer(title);

        const [newTodo] = await db
            .insert(todos)
            .values({
                title:     sanitizeTitle,
                userEmail: session.user?.email || "",
                completed: false,
                createdAt: new Date()
            })
            .returning();

        if (!newTodo) {
            throw new Error("Failed to create todo");
        }

        return NextResponse.json(newTodo);
    } catch (error: any) {
        return NextResponse.json(
            {
                error: "Error",
                message: error.message || "Something went wrong",
            },
            { status: 500 }
        );
    }
}