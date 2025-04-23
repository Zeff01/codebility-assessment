import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { userToken } from '@/lib/api-helper/cookie-variable';

const createTodoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string(),
});

export async function GET(request: Request) {
  try {
    const authToken = userToken(request.headers.get('x-access-token') as string) as any;
    if (!authToken) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const todos = await prisma.todo.findMany({
      where: { userId: authToken.id },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ todos });
  } catch (error) {
    console.error('Error fetching todos:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const authToken = userToken(request.headers.get('x-access-token') as string) as any;

    if (!authToken) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.log(authToken);

    const body = await request.json();
    const validatedData = createTodoSchema.parse(body);

    const todo = await prisma.todo.create({
      data: {
        ...validatedData,
        userId: authToken.id,
      },
    });

    return NextResponse.json({ todo }, { status: 201 });
  } catch (error) {
    console.error('Error creating todo:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid input', errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
