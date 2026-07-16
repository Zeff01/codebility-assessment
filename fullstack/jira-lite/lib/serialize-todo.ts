import type { TodoStatus } from "@prisma/client";

import {
  allowedStatusTransitions,
  canDeleteTodo,
  canEditTodo,
  type CurrentUser,
} from "@/lib/authorization";

type TodoWithOwner = {
  id: string;
  title: string;
  description: string | null;
  problem: string | null;
  acceptanceCriteria: string | null;
  technicalImplementation: string | null;
  points: number;
  status: TodoStatus;
  createdAt: Date;
  userId: string;
  user: { id: string; name: string; groupId: string | null };
};

export function serializeTodo(todo: TodoWithOwner, viewer: CurrentUser) {
  const owner = { id: todo.user.id, groupId: todo.user.groupId };

  return {
    id: todo.id,
    title: todo.title,
    description: todo.description,
    problem: todo.problem,
    acceptanceCriteria: todo.acceptanceCriteria,
    technicalImplementation: todo.technicalImplementation,
    points: todo.points,
    status: todo.status,
    createdAt: todo.createdAt.toISOString(),
    owner: { id: todo.user.id, name: todo.user.name },
    isOwner: todo.userId === viewer.id,
    permissions: {
      allowedStatuses: allowedStatusTransitions(viewer, owner),
      canEdit: canEditTodo(viewer, todo.userId),
      canDelete: canDeleteTodo(viewer, todo.userId),
    },
  };
}
