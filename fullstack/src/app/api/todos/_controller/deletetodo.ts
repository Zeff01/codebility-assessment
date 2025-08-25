import { NextResponse } from "next/server";
import { Session } from "next-auth";
import { db }    from "@/db";
import { todos } from "@/db/schema";
import { isAValidNumber } from "@/lib/validatorAndSanitizer";
import { and, eq }        from "drizzle-orm";

export default async function DeleteTodo(session: Session, req: Request) {
    try {
        const { id }        = await req.json();
        const sanitizeID    = isAValidNumber( id );

        const [newTodo] = await db
            .delete(todos)
            .where(and(
                eq( todos.id,        sanitizeID ),
                eq( todos.userEmail, session.user?.email || "")
            ))
            .returning();

        if (!newTodo) {
            throw new Error("Failed to delete todo");
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