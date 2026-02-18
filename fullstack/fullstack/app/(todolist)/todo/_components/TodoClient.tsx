"use client";

import { use } from "react";
import { Sparkles } from "lucide-react"; // Swapped for a "vivid" feel
import TodoItem from "../../_components/TodoItem";
import { todos } from "@prisma/client";

export default function TodoClient({
  todosPromise,
}: {
  todosPromise: Promise<todos[]>;
}) {
  const userTodos = use(todosPromise);

  return (
    <section className="space-y-3 pb-20">
      {userTodos.length > 0 ? (
        userTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-3xl">
          <p className="text-gray-400 font-medium">No tasks for today</p>
        </div>
      )}
    </section>
  );
}
