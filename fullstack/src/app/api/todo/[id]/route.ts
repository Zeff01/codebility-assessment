
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { userToken } from '@/lib/api-helper/cookie-variable';

interface Params {
  params: {
    id: number;
  };
}

const updateTodoSchema = z.object({
  title: z.string().min(1, 'Title is required').optional(),
  description: z.string().optional(),
  status: z.enum(['pending', 'in-progress', 'completed']).optional(),
});

export async function GET(request: Request, { params }: Params) {
  try {
    const authToken = userToken(request.headers.get('x-access-token') as string) as any;
    if (!authToken) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    console.log(typeof Number(params.id))
    const todo = await prisma.todo.findUnique({
      where: {
        id: Number(Number(params.id)),
        userId: authToken.id,
      },
    });

    if (!todo) {
      return NextResponse.json({ message: 'Todo not found' }, { status: 404 });
    }

    return NextResponse.json({ todo });
  } catch (error) {
    console.error('Error fetching todo:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

// PATCH to update todo
export async function PATCH(request: Request, { params }: Params) {
  try {
    const authToken = userToken(request.headers.get('x-access-token') as string) as any;
    if (!authToken) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const existingTodo = await prisma.todo.findUnique({
      where: {
        id: Number(params.id),
        userId: authToken.id,
      },
    });

    if (!existingTodo) {
      return NextResponse.json({ message: 'Todo not found' }, { status: 404 });
    }

    const body = await request.json();
    const validatedData = updateTodoSchema.parse(body);

    const todo = await prisma.todo.update({
      where: { id: Number(params.id) },
      data: validatedData,
    });

    return NextResponse.json({ todo });
  } catch (error) {
    console.error('Error updating todo:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid input', errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

// DELETE a todo
export async function DELETE(request: Request, { params }: Params) {
  try {
    const authToken = userToken(request.headers.get('x-access-token') as string) as any;
    if (!authToken) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const existingTodo = await prisma.todo.findUnique({
      where: {
        id: Number(params.id),
        userId: authToken.id,
      },
    });

    if (!existingTodo) {
      return NextResponse.json({ message: 'Todo not found' }, { status: 404 });
    }

    await prisma.todo.delete({ where: { id: Number(params.id) } });

    return NextResponse.json(
      { message: 'Todo deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting todo:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
