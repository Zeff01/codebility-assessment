'use client';

import { useEffect, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { Todo } from '@/types/todo';
import { apiClient } from '@/lib/api-client';
import { TodoForm } from '@/components/todo-form';
import { TodoList } from '@/components/todo-list';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, LogOut } from 'lucide-react';

interface User {
  name?: string | null;
  email?: string | null;
}

interface TodosClientProps {
  user: User;
}

export function TodosClient({ user }: TodosClientProps) {
  const { data: session } = useSession();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [completingId, setCompletingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (session?.user?.id) {
      fetchTodos();
    }
  }, [session]);

  const fetchTodos = async () => {
    setIsLoading(true);
    setError('');
    try {
      const data = await apiClient.getTodos();
      setTodos(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch todos';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateTodo = async (title: string) => {
    setError('');
    try {
      const data = await apiClient.createTodo({ title });
      setTodos((prev) => [data, ...prev]);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create todo';
      setError(message);
      throw err;
    }
  };

  const handleCompleteTodo = async (id: string) => {
    setCompletingId(id);
    setError('');
    try {
      const todo = todos.find((t) => t.id === id);
      if (!todo) return;

      const data = await apiClient.updateTodo(id, { completed: !todo.completed });
      setTodos((prev) => prev.map((t) => (t.id === id ? data : t)));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update todo';
      setError(message);
    } finally {
      setCompletingId(null);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    setDeletingId(id);
    setError('');
    try {
      await apiClient.deleteTodo(id);
      setTodos((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete todo';
      setError(message);
    } finally {
      setDeletingId(null);
    }
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/sign-in' });
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="text-muted-foreground h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold sm:text-2xl">Todo App</h1>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-muted-foreground hidden text-xs sm:inline sm:text-sm">
              {user?.email}
            </span>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Sign Out</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl px-4 py-4 sm:py-8">
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h2 className="mb-4 text-lg font-semibold sm:text-xl">Welcome back, {user?.name}!</h2>
            <TodoForm onSubmit={handleCreateTodo} />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <TodoList
            todos={todos}
            onComplete={handleCompleteTodo}
            onDelete={handleDeleteTodo}
            completingId={completingId}
            deletingId={deletingId}
          />
        </div>
      </main>
    </div>
  );
}
