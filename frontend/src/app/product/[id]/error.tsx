"use client";

import Link from "next/link";

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
        <div style={{ fontWeight: 900 }}>Failed to load product</div>
        <div className="muted">{error.message}</div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button className="button" onClick={reset}>
            Try again
          </button>
          <Link href="/" className="button">
            Back to products
          </Link>
        </div>
      </div>
    </section>
  );
}
