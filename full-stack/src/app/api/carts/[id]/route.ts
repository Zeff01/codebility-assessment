import { NextResponse } from "next/server";
import cartSchema from "../cartSchema";
import { z } from "zod";

interface IParams {
  id: string;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<IParams> }
) {
  const id = (await params).id;

  return NextResponse.json({
    id,
    method: request.method,
  });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<IParams> }
) {
  const id = (await params).id;

  try {
    const formData = await request.json();
    const data = cartSchema.parse(formData);

    return NextResponse.json({
      validatedData: data,
      id,
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

export async function DELETE(
  request: Request,
  { params }: { params: Promise<IParams> }
) {
  const id = (await params).id;

  return NextResponse.json({
    id,
    method: request.method,
  });
}
