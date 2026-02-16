import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import { getTodosByUserId, createTodo, updateTodo, deleteTodo } from '@/lib/todos';

async function getUserFromRequest(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');

  if (!token) {
    return null;
  }

  return verifyToken(token.value);
}

export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const todos = getTodosByUserId(user.id);
    return NextResponse.json({ todos });
  } catch (error) {
    console.error('Get todos error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title } = body;

    if (!title || title.trim() === '') {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }

    const newTodo = createTodo(user.id, title.trim());
    return NextResponse.json({ todo: newTodo }, { status: 201 });
  } catch (error) {
    console.error('Create todo error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, title, completed } = body;

    if (!id) {
      return NextResponse.json({ error: 'Todo ID is required' }, { status: 400 });
    }

    const updates: any = {};
    if (title !== undefined) updates.title = title;
    if (completed !== undefined) updates.completed = completed;

    const updatedTodo = updateTodo(id, user.id, updates);

    if (!updatedTodo) {
      return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
    }

    return NextResponse.json({ todo: updatedTodo });
  } catch (error) {
    console.error('Update todo error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Todo ID is required' }, { status: 400 });
    }

    const deleted = deleteTodo(id, user.id);

    if (!deleted) {
      return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error('Delete todo error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
