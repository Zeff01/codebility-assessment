import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { hash } from "bcryptjs";
import { stringSanitizer } from "@/lib/validatorAndSanitizer";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        //Sanitize the inputs
        const sanitizedEmail    = stringSanitizer(email);
        const sanitizedPassword = stringSanitizer(password);
        const hashedPassword    = await hash(sanitizedPassword, 10);

        //check if the user is already registed
        const existingUser = await db.query.users.findFirst({
            where: eq(users.email, sanitizedEmail),
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "Email already registered" },
                { status: 400 }
            );
        }

        await db.insert(users).values({
            email: sanitizedEmail,
            password: hashedPassword,
        });

        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ error: "User registration failed" }, { status: 500 });
    }
}
