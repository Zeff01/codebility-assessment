import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { isAdmin, visibleColumnsFor } from "@/lib/authorization";
import { getCurrentUser } from "@/lib/current-user";
import { prisma } from "@/lib/prisma";
import { serializeTodo } from "@/lib/serialize-todo";
import { NavBar } from "@/components/nav-bar";
import { TodoBoard } from "@/components/todo-board";

export default async function TodosPage() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/login");
  }

  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/login");
  }

  const columns = visibleColumnsFor(currentUser.role);

  const [todos, group] = await Promise.all([
    prisma.todo.findMany({
      where: {
        status: { in: columns },
        ...(currentUser.role === "ADMIN"
          ? {}
          : {
              OR: [
                { userId: currentUser.id },
                ...(currentUser.groupId
                  ? [{ user: { groupId: currentUser.groupId } }]
                  : []),
              ],
            }),
      },
      include: { user: { select: { id: true, name: true, groupId: true } } },
      orderBy: { createdAt: "desc" },
    }),
    currentUser.groupId
      ? prisma.group.findUnique({
          where: { id: currentUser.groupId },
          select: {
            name: true,
            members: { select: { id: true, name: true, role: true } },
          },
        })
      : null,
  ]);

  return (
    <div className="flex flex-1 flex-col">
      <NavBar
        userLabel={session.user.email ?? session.user.name ?? "Account"}
        isAdmin={isAdmin(currentUser)}
        groupName={group?.name}
        groupMembers={group?.members}
      />
      <TodoBoard
        columns={columns}
        initialTodos={todos.map((todo) => serializeTodo(todo, currentUser))}
      />
    </div>
  );
}
