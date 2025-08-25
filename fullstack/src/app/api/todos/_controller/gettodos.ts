import { NextResponse } from "next/server";
import { Session }      from "next-auth";
import { db }           from "@/db";
import { todos }        from "@/db/schema";
import { desc, eq }     from "drizzle-orm";

export async function GetTodos(session :Session ) {
    try {
        const result = await db
            .select()
            .from(todos)
            .where( eq(todos.userEmail, session.user?.email || ""))
            .orderBy(desc(todos.createdAt));

        return NextResponse.json(result);
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
