import { NextResponse } from "next/server";
import cartSchema from "./cartSchema";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const data = cartSchema.parse(formData);

    return NextResponse.json({
      data,
      method: request.method,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation error" },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
