"use client";

import { useEffect, useRef } from "react";
import { useFinance } from "@/hooks/useFinance";

function PulseDot({ status }: { status: "loading" | "live" | "error" }) {
  const colors = {
    loading: "bg-gray-400",
    live: "bg-green-500",
    error: "bg-red-500",
  };
  return (
    <span className="relative flex items-center gap-1.5">
      <span className={`w-2 h-2 rounded-full ${colors[status]}`}>
        {status === "live" && (
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-60" />
        )}
      </span>
      <span className="text-xs text-gray-400 capitalize">{status}</span>
    </span>
  );
}

function formatPrice(price: number): string {
  if (price >= 1000) return price.toLocaleString("en-US", { maximumFractionDigits: 0 });
  return price.toFixed(2);
}

export default function FinanceWidget() {
  const { data, status, error, fromCache, fetch: fetchFinance } = useFinance();
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      fetchFinance();
    }
  }, [fetchFinance]);

  const pulseStatus =
    status === "loading" ? "loading" : status === "error" ? "error" : "live";

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-base">
            ↗
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Markets</p>
            <p className="text-[11px] text-zinc-400">{fromCache ? "cached" : "simulated"}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <PulseDot status={pulseStatus} />
          <button
            onClick={() => fetchFinance(true)}
            disabled={status === "loading"}
            className="text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 disabled:opacity-40 transition-colors"
            aria-label="Refresh market data"
          >
            ↺ Refresh
          </button>
        </div>
      </div>

      {/* Body */}
      {status === "loading" && (
        <div className="space-y-2 animate-pulse">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-12 bg-zinc-100 dark:bg-zinc-800 rounded-xl" />
          ))}
        </div>
      )}

      {status === "error" && (
        <div className="text-sm text-red-600 bg-red-50 dark:bg-red-950/40 dark:text-red-400 rounded-lg px-4 py-3 text-center">
          {error}
        </div>
      )}

      {status === "success" && (
        <div className="flex flex-col gap-2">
          {data.map((q) => {
            const up = q.changePercent > 0.05;
            const down = q.changePercent < -0.05;
            const sign = q.changePercent > 0 ? "+" : "";
            return (
              <div
                key={q.ticker}
                className="flex items-center gap-3 px-3 py-2.5 bg-zinc-50 dark:bg-zinc-800 rounded-xl"
              >
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 w-10 font-mono">
                  {q.ticker}
                </span>
                <span className="flex-1 text-xs text-zinc-400 truncate">{q.name}</span>
                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 font-mono tabular-nums">
                  ${formatPrice(q.price)}
                </span>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-md tabular-nums min-w-[58px] text-right ${
                    up
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400"
                      : down
                      ? "bg-red-50 text-red-600 dark:bg-red-950/60 dark:text-red-400"
                      : "bg-zinc-100 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"
                  }`}
                >
                  {sign}{q.changePercent.toFixed(2)}%
                </span>
              </div>
            );
          })}
        </div>
      )}

      <p className="text-[11px] text-zinc-400 text-center">
        In production: server-side Finnhub API route to keep keys off the client
      </p>
    </div>
  );
}
