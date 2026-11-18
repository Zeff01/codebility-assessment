"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

type ErrorStateProps = {
  error: unknown;
  retry: () => void;
  title?: string;
};

export function ErrorState({ error, retry, title = "Something went wrong" }: ErrorStateProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-3xl bg-surface px-6 py-16 text-center ring-1 ring-border">
      <span aria-hidden className="grid h-12 w-12 place-items-center rounded-full bg-red-50 text-xl text-red-600 dark:bg-red-500/10 dark:text-red-300">
        !
      </span>
      <h1 className="font-display text-2xl font-bold">{title}</h1>
      <p className="text-muted">Please try again. If the problem persists, come back a little later.</p>
      <Button variant="secondary" onClick={() => retry()}>
        Try again
      </Button>
    </div>
  );
}
