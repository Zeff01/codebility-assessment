import type { Priority } from "./types";

const STYLES: Record<Priority, string> = {
  Low: "text-slate-400 bg-slate-400/10 ring-slate-400/20",
  Medium: "text-amber-400 bg-amber-400/10 ring-amber-400/20",
  High: "text-rose-400 bg-rose-400/10 ring-rose-400/20",
};

export default function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${STYLES[priority]}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          priority === "High"
            ? "bg-rose-400"
            : priority === "Medium"
              ? "bg-amber-400"
              : "bg-slate-400"
        }`}
      />
      {priority}
    </span>
  );
}
