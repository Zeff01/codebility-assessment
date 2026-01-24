import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "todos.json");

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Helper: read todos from file
const readTodos = (): Todo[] => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, "utf-8");
  return data ? JSON.parse(data) : [];
};

// Helper: write todos to file
const writeTodos = (todos: Todo[]) => {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};

export async function GET() {
  try {
    const todos = readTodos();
    return NextResponse.json(todos);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to read todos" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title } = await req.json();
    const todos = readTodos();
    const newTodo: Todo = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      title,
      completed: false,
    };
    todos.push(newTodo);
    writeTodos(todos);
    return NextResponse.json(newTodo);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to create todo" },
      { status: 500 },
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = Number(url.searchParams.get("id"));
    const { title, completed } = await req.json();

    const todos = readTodos();
    const index = todos.findIndex((t) => t.id === id);
    if (index === -1)
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });

    // Update title if provided
    if (title !== undefined) todos[index].title = title;
    // Update completed if provided
    if (completed !== undefined) todos[index].completed = completed;

    writeTodos(todos);
    return NextResponse.json(todos[index]);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to update todo" },
      { status: 500 },
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = Number(url.searchParams.get("id"));

    let todos = readTodos();
    const exists = todos.find((t) => t.id === id);
    if (!exists)
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });

    todos = todos.filter((t) => t.id !== id);
    writeTodos(todos);

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to delete todo" },
      { status: 500 },
    );
  }
}
