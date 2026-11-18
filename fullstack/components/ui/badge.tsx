import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "neutral" | "success" | "warning" | "danger" | "sale" | "overlay";

const tones: Record<Tone, string> = {
  neutral: "bg-surface-muted text-muted",
  success: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/15 dark:bg-emerald-500/10 dark:text-emerald-300",
  warning: "bg-amber-50 text-amber-800 ring-1 ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-300",
  danger: "bg-red-50 text-red-700 ring-1 ring-red-600/15 dark:bg-red-500/10 dark:text-red-300",
  sale: "bg-rose-600 text-white shadow-sm",
  overlay: "bg-stone-900/85 text-white",
};

type BadgeProps = { tone?: Tone; children: ReactNode; className?: string };

export function Badge({ tone = "neutral", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
