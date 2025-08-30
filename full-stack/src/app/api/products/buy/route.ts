import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.json();
  return NextResponse.json({
    formData: formData,
    checkout: true,
  });
}
