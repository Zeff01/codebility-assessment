"use client";

import { useEffect } from "react";

type TodoStatus =
  | "TO_DO"
  | "IN_PROGRESS"
  | "READY_FOR_TESTING"
  | "TESTED_AND_VERIFIED"
  | "COMPLETED";

const STATUS_LABELS: Record<TodoStatus, string> = {
  TO_DO: "To Do",
  IN_PROGRESS: "In Progress",
  READY_FOR_TESTING: "Ready for Testing",
  TESTED_AND_VERIFIED: "Tested and Verified",
  COMPLETED: "Completed",
};

export type ViewableTicket = {
  title: string;
  points: number;
  status: TodoStatus;
  createdAt: string;
  owner: { id: string; name: string };
  description: string | null;
  problem: string | null;
  acceptanceCriteria: string | null;
  technicalImplementation: string | null;
};

export function ViewTicketModal({
  ticket,
  onClose,
}: {
  ticket: ViewableTicket;
  onClose: () => void;
}) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ticket.title}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[90vh] w-full max-w-lg flex-col overflow-y-auto rounded-lg border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="mb-4 flex items-start justify-between gap-2">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {ticket.title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded p-1 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800"
          >
            ✕
          </button>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-zinc-400 dark:text-zinc-600">
          <span className="rounded-full bg-zinc-100 px-2 py-0.5 font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            {ticket.owner.name}
          </span>
          <span className="rounded-full bg-zinc-100 px-2 py-0.5 font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
            {STATUS_LABELS[ticket.status]}
          </span>
          {ticket.points > 0 && (
            <span className="rounded-full bg-blue-100 px-2 py-0.5 font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              {ticket.points} pts
            </span>
          )}
          <span>
            {new Date(ticket.createdAt).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <DetailSection label="Description" value={ticket.description} />
          <DetailSection label="Problem" value={ticket.problem} />
          <DetailSection label="Acceptance Criteria" value={ticket.acceptanceCriteria} />
          <DetailSection
            label="Technical Implementation"
            value={ticket.technicalImplementation}
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailSection({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{label}</p>
      <p className="whitespace-pre-wrap text-sm text-zinc-600 dark:text-zinc-400">
        {value || <span className="italic text-zinc-400 dark:text-zinc-600">Not provided</span>}
      </p>
    </div>
  );
}
