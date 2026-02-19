import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const passwordChecks = [
      { regex: /.{8,}/, message: "at least 8 characters" },
      { regex: /[a-z]/, message: "a lowercase letter" },
      { regex: /[A-Z]/, message: "an uppercase letter" },
      { regex: /[0-9]/, message: "a number" },
      { regex: /[^a-zA-Z0-9]/, message: "a special character" },
    ];

    const failedChecks = passwordChecks.filter(
      (check) => !check.regex.test(password)
    );

    if (failedChecks.length > 0) {
      return NextResponse.json(
        {
          error: `Password must contain ${failedChecks
            .map((c) => c.message)
            .join(", ")}`,
        },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: name || email.split("@")[0],
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      id: user.id,
      email: user.email,
      name: user.name,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
