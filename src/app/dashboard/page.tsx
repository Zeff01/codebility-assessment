"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/store";
import { fetchTodos } from "@/store/features/todo";
import { TodoHeader, TodoFilter, TodoList, TodoForm } from "@/components/todo";

export default function DashboardPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-6">
        <TodoHeader />
        <TodoFilter />
        <TodoList />
        <TodoForm />
      </div>
    </div>
  );
}
