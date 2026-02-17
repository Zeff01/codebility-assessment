import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib';
import { UpdateTodoInput, Todo } from '@/types/todo';

const JSON_SERVER_URL = process.env.JSON_SERVER_URL || 'http://localhost:5000';

function getErrorMessage(error: unknown, defaultMsg: string): string {
  if (
    error instanceof Error &&
    (error.message.includes('ECONNREFUSED') || error.message.includes('fetch failed'))
  ) {
    return "Backend server not running. Run 'pnpm server' in another terminal.";
  }
  return defaultMsg;
}

// GET /api/todos/[id] - Fetch a single todo
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const response = await fetch(`${JSON_SERVER_URL}/todos/${id}`);

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({ success: false, error: 'Todo not found' }, { status: 404 });
      }
      throw new Error(`json-server error: ${response.status}`);
    }

    const todo: Todo = await response.json();

    // Verify ownership
    if (todo.userId !== session.user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    return NextResponse.json({ success: true, data: todo });
  } catch (error) {
    console.error('Failed to fetch todo:', error);
    return NextResponse.json(
      { success: false, error: getErrorMessage(error, 'Failed to fetch todo') },
      { status: 500 }
    );
  }
}

// PATCH /api/todos/[id] - Update a todo (e.g., toggle completed status)
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body: UpdateTodoInput = await request.json();

    // First verify ownership by fetching the todo
    const getResponse = await fetch(`${JSON_SERVER_URL}/todos/${id}`);

    if (!getResponse.ok) {
      if (getResponse.status === 404) {
        return NextResponse.json({ success: false, error: 'Todo not found' }, { status: 404 });
      }
      throw new Error(`json-server error: ${getResponse.status}`);
    }

    const todo: Todo = await getResponse.json();

    // Verify ownership
    if (todo.userId !== session.user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Proceed with update
    const response = await fetch(`${JSON_SERVER_URL}/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`json-server error: ${response.status}`);
    }

    const updatedTodo: Todo = await response.json();
    return NextResponse.json({ success: true, data: updatedTodo });
  } catch (error) {
    console.error('Failed to update todo:', error);
    return NextResponse.json(
      { success: false, error: getErrorMessage(error, 'Failed to update todo') },
      { status: 500 }
    );
  }
}

// DELETE /api/todos/[id] - Delete a todo
export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;

    // First verify ownership by fetching the todo
    const getResponse = await fetch(`${JSON_SERVER_URL}/todos/${id}`);

    if (!getResponse.ok) {
      if (getResponse.status === 404) {
        return NextResponse.json({ success: false, error: 'Todo not found' }, { status: 404 });
      }
      throw new Error(`json-server error: ${getResponse.status}`);
    }

    const todo: Todo = await getResponse.json();

    // Verify ownership
    if (todo.userId !== session.user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Proceed with deletion
    const response = await fetch(`${JSON_SERVER_URL}/todos/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`json-server error: ${response.status}`);
    }

    return NextResponse.json({ success: true, data: { id } });
  } catch (error) {
    console.error('Failed to delete todo:', error);
    return NextResponse.json(
      { success: false, error: getErrorMessage(error, 'Failed to delete todo') },
      { status: 500 }
    );
  }
}
