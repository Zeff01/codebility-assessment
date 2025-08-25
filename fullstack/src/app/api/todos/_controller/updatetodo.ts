import { NextResponse } from "next/server";
import { Session } from "next-auth";
import { db } from "@/db";
import { todos } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { booleanValidator, isAValidNumber, stringSanitizer } from "@/lib/validatorAndSanitizer";

export default async function UpdateTodo(session: Session, req: Request) {
    try {
        const { id, title, completed } = await req.json();
        const sanitizeID        = isAValidNumber(id);
        const sanitizeTitle     = stringSanitizer(title);
        const sanitizeCompleted = booleanValidator(completed);

        const [update] = await db
            .update(todos)
            .set({
                title: sanitizeTitle,
                completed: sanitizeCompleted,
            })
            .where(and(
                eq(todos.id, sanitizeID),
                eq(todos.userEmail, session.user?.email || "")
            ))
            .returning();

        if (!update) {
            throw new Error("Failed to update todo");
        }

        return NextResponse.json(update);
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