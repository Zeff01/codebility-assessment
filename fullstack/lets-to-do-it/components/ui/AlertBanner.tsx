"use client";

interface AlertBannerProps {
  message: string;
  onDismiss: () => void;
}

export default function AlertBanner({ message, onDismiss }: AlertBannerProps) {
  return (
    <div
      role="alert"
      className="flex items-start gap-3 rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-3.5 backdrop-blur-xl animate-[fade-in_0.2s_ease-out]"
    >
      <svg
        aria-hidden="true"
        className="mt-0.5 h-5 w-5 shrink-0 text-rose-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v5M12 16h.01" />
      </svg>

      <div className="flex-1">
        <p className="text-sm font-medium text-rose-200">Something went wrong</p>
        <p className="mt-0.5 text-sm text-rose-300/80">{message}</p>
      </div>

      <button
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss error"
        className="shrink-0 rounded-lg p-1.5 text-rose-400/70 transition-colors hover:bg-rose-500/10 hover:text-rose-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/40"
      >
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        >
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
    </div>
  );
}
