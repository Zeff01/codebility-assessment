import type { Role, TodoStatus } from "@prisma/client";

export type CurrentUser = {
  id: string;
  role: Role;
  groupId: string | null;
};

type TodoOwner = {
  id: string;
  groupId: string | null;
};

export const ALL_STATUSES: TodoStatus[] = [
  "TO_DO",
  "IN_PROGRESS",
  "READY_FOR_TESTING",
  "TESTED_AND_VERIFIED",
  "COMPLETED",
];

const DEV_STATUSES: TodoStatus[] = ["TO_DO", "IN_PROGRESS", "READY_FOR_TESTING"];
const QA_STATUSES: TodoStatus[] = ["READY_FOR_TESTING", "TESTED_AND_VERIFIED", "COMPLETED"];

export function isAdmin(subject: CurrentUser): boolean {
  return subject.role === "ADMIN";
}

function isTeammate(subject: CurrentUser, owner: TodoOwner): boolean {
  return (
    subject.id !== owner.id &&
    subject.groupId !== null &&
    subject.groupId === owner.groupId
  );
}

export function canReadTodo(subject: CurrentUser, owner: TodoOwner): boolean {
  if (isAdmin(subject)) return true;
  if (subject.id === owner.id) return true;
  return isTeammate(subject, owner);
}

export function canEditTodo(subject: CurrentUser, ownerId: string): boolean {
  return isAdmin(subject) || subject.id === ownerId;
}

export function canDeleteTodo(subject: CurrentUser, ownerId: string): boolean {
  return isAdmin(subject) || subject.id === ownerId;
}

/** The board columns (statuses) a viewer with this role is shown at all. */
export function visibleColumnsFor(role: Role): TodoStatus[] {
  return role === "QA" ? QA_STATUSES : ALL_STATUSES;
}

/**
 * The statuses `subject` may set on this ticket right now. Empty means the
 * ticket's status is read-only for them (they may still be able to view it).
 *
 * The owner's own workflow is scoped by the OWNER's role, not a flat "owners
 * can always use dev statuses" rule: a QA user's own tickets are already
 * verification tasks, so their own pipeline is the QA one. A non-owner,
 * non-QA teammate never gets to change someone else's status — only QA
 * (or admin) moves tickets through testing.
 */
export function allowedStatusTransitions(subject: CurrentUser, owner: TodoOwner): TodoStatus[] {
  if (isAdmin(subject)) return ALL_STATUSES;

  if (subject.id === owner.id) {
    return subject.role === "QA" ? QA_STATUSES : DEV_STATUSES;
  }

  if (isTeammate(subject, owner) && subject.role === "QA") {
    return QA_STATUSES;
  }

  return [];
}
