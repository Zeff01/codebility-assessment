import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { prisma } from "@/app/lib/prisma";
import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const { dishName } = await req.json();

    if (!dishName) {
      return NextResponse.json(
        { error: "Dish name is required" },
        { status: 400 },
      );
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `You are a professional chef. Return a JSON object with a "steps" array of strings. 
          Each string should be a concise cooking instruction.
          Example: {"steps": ["Boil water", "Add pasta", "Drain"]}`,
        },
        { role: "user", content: `Recipe for: ${dishName}` },
      ],
      response_format: { type: "json_object" },
      temperature: 0.5,
    });

    const responseContent = completion.choices[0]?.message?.content;
    const parsed = JSON.parse(responseContent || '{"steps": []}');
    const steps = parsed.steps || [];

    const savedSteps = await Promise.all(
      steps.map((step: string) =>
        prisma.todos.create({
          data: {
            user_id: session!.user.id,
            task: step,
            is_completed: false,
          },
        }),
      ),
    );

    return NextResponse.json({ success: true, data: savedSteps });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Failed to process order" },
      { status: 500 },
    );
  }
}
