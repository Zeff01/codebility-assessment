import Link from "next/link";
import type { ReactNode } from "react";
import { buttonStyles } from "@/components/ui/button";

type EmptyStateProps = {
  title: string;
  description: ReactNode;
  action: { href: string; label: string };
  as?: "h1" | "p";
};

export function EmptyState({ title, description, action, as: Title = "p" }: EmptyStateProps) {
  return (
    <div className="relative flex flex-col items-center gap-4 overflow-hidden rounded-3xl bg-surface px-6 py-16 text-center ring-1 ring-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgb(99_102_241/0.15),transparent_70%)]"
      />
      <Title className="relative font-display text-2xl font-bold">{title}</Title>
      <p className="relative max-w-sm text-muted">{description}</p>
      <Link href={action.href} className={`relative mt-2 ${buttonStyles()}`}>
        {action.label}
      </Link>
    </div>
  );
}
