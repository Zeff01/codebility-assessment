"use client";

import { useEffect, useState } from "react";

export type NewTicketInput = {
  title: string;
  points?: number;
  description?: string;
  problem?: string;
  acceptanceCriteria?: string;
  technicalImplementation?: string;
};

export function CreateTicketModal({
  onClose,
  onCreate,
}: {
  onClose: () => void;
  onCreate: (input: NewTicketInput) => Promise<void>;
}) {
  const [title, setTitle] = useState("");
  const [points, setPoints] = useState("");
  const [description, setDescription] = useState("");
  const [problem, setProblem] = useState("");
  const [acceptanceCriteria, setAcceptanceCriteria] = useState("");
  const [technicalImplementation, setTechnicalImplementation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    setIsSubmitting(true);
    setError(null);

    try {
      await onCreate({
        title: trimmedTitle,
        points: points.trim() ? Number(points) : undefined,
        description: description.trim() || undefined,
        problem: problem.trim() || undefined,
        acceptanceCriteria: acceptanceCriteria.trim() || undefined,
        technicalImplementation: technicalImplementation.trim() || undefined,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setIsSubmitting(false);
      return;
    }
  }

  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="New ticket"
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[90vh] w-full max-w-lg flex-col overflow-y-auto rounded-lg border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
      >
        <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          New ticket
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Field label="Title" required>
            <input
              type="text"
              required
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={200}
              className={inputClass}
            />
          </Field>

          <Field label="Points">
            <input
              type="number"
              min={0}
              max={100}
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              placeholder="e.g. 10"
              className={inputClass}
            />
          </Field>

          <Field label="Description">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={2000}
              rows={3}
              className={textareaClass}
            />
          </Field>

          <Field label="Problem">
            <textarea
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              maxLength={2000}
              rows={3}
              className={textareaClass}
            />
          </Field>

          <Field label="Acceptance Criteria">
            <textarea
              value={acceptanceCriteria}
              onChange={(e) => setAcceptanceCriteria(e.target.value)}
              maxLength={2000}
              rows={3}
              className={textareaClass}
            />
          </Field>

          <Field label="Technical Implementation">
            <textarea
              value={technicalImplementation}
              onChange={(e) => setTechnicalImplementation(e.target.value)}
              maxLength={2000}
              rows={3}
              className={textareaClass}
            />
          </Field>

          {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

          <div className="mt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !title.trim()}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
            >
              {isSubmitting ? "Creating..." : "Create ticket"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const inputClass =
  "rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 user-invalid:border-red-500 user-invalid:text-red-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:user-invalid:border-red-500 dark:user-invalid:text-red-400";

const textareaClass =
  "resize-none rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
        {required && <span className="text-red-600 dark:text-red-400"> *</span>}
      </label>
      {children}
    </div>
  );
}
