"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="panel">
      <div className="stateBox">
        <div style={{ fontWeight: 900 }}>Something went wrong</div>
        <div className="muted">{error.message}</div>

        <button className="button" onClick={reset}>
          Try again
        </button>
      </div>
    </section>
  );
}
