import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib';
import { CreateTodoInput, Todo } from '@/types/todo';

const JSON_SERVER_URL = process.env.JSON_SERVER_URL || 'http://localhost:5000';

// GET /api/todos - Fetch all todos for the authenticated user
export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Workaround: json-server v1.0.0-beta has broken string filtering
    // Fetch all todos and filter server-side by userId
    const response = await fetch(`${JSON_SERVER_URL}/todos`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`json-server error: ${response.status}`);
    }

    const allTodos: Todo[] = await response.json();
    // Filter todos by userId on the server side
    const userTodos = allTodos.filter((todo) => todo.userId === session.user.id);

    return NextResponse.json({ success: true, data: userTodos });
  } catch (error) {
    console.error('Failed to fetch todos:', error);
    // Provide helpful message when json-server is not running
    const isConnectionError =
      error instanceof Error &&
      (error.message.includes('ECONNREFUSED') || error.message.includes('fetch failed'));
    const errorMessage = isConnectionError
      ? "Backend server not running. Run 'pnpm server' in another terminal."
      : 'Failed to fetch todos';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}

// POST /api/todos - Create a new todo for the authenticated user
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body: CreateTodoInput = await request.json();

    // Validate input
    if (!body.title || typeof body.title !== 'string') {
      return NextResponse.json({ success: false, error: 'Title is required' }, { status: 400 });
    }

    const trimmedTitle = body.title.trim();
    if (trimmedTitle.length === 0) {
      return NextResponse.json({ success: false, error: 'Title cannot be empty' }, { status: 400 });
    }

    if (trimmedTitle.length > 200) {
      return NextResponse.json(
        { success: false, error: 'Title is too long (max 200 characters)' },
        { status: 400 }
      );
    }

    const newTodo = {
      title: trimmedTitle,
      userId: session.user.id,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    const response = await fetch(`${JSON_SERVER_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    });

    if (!response.ok) {
      throw new Error(`json-server error: ${response.status}`);
    }

    const todo: Todo = await response.json();
    return NextResponse.json({ success: true, data: todo }, { status: 201 });
  } catch (error) {
    console.error('Failed to create todo:', error);
    const isConnectionError =
      error instanceof Error &&
      (error.message.includes('ECONNREFUSED') || error.message.includes('fetch failed'));
    const errorMessage = isConnectionError
      ? "Backend server not running. Run 'pnpm server' in another terminal."
      : 'Failed to create todo';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
