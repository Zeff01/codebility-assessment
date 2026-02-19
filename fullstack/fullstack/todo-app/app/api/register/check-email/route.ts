import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ exists: false });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    return NextResponse.json({ exists: !!user });
  } catch {
    return NextResponse.json({ exists: false });
  }
}
