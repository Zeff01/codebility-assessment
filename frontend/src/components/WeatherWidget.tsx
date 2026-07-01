"use client";

import { useState, useEffect, useRef } from "react";
import { useWeather } from "@/hooks/useWeather";

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

export default function WeatherWidget() {
  const [city, setCity] = useState("Manila");
  const [input, setInput] = useState("Manila");
  const { data, status, error, fromCache, fetch: fetchWeather } = useWeather();
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      fetchWeather("Manila");
    }
  }, [fetchWeather]);

  function handleSearch() {
    const trimmed = input.trim();
    if (!trimmed) return;
    setCity(trimmed);
    fetchWeather(trimmed);
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSearch();
  }

  const pulseStatus =
    status === "loading" ? "loading" : status === "error" ? "error" : "live";

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 text-base">
            ☁
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Weather</p>
            <p className="text-[11px] text-zinc-400">{fromCache ? "cached" : "live"}</p>
          </div>
        </div>
        <PulseDot status={pulseStatus} />
      </div>

      {/* Search */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="City name"
          className="flex-1 text-sm px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        />
        <button
          onClick={handleSearch}
          disabled={status === "loading"}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          Search
        </button>
      </div>

      {/* Body */}
      {status === "loading" && (
        <div className="space-y-3 animate-pulse">
          <div className="h-14 w-2/3 bg-zinc-100 dark:bg-zinc-800 rounded-lg" />
          <div className="h-4 w-1/2 bg-zinc-100 dark:bg-zinc-800 rounded" />
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-zinc-100 dark:bg-zinc-800 rounded-lg" />
            ))}
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="text-sm text-red-600 bg-red-50 dark:bg-red-950/40 dark:text-red-400 rounded-lg px-4 py-3 text-center">
          {error}
        </div>
      )}

      {status === "success" && data && (
        <>
          <div>
            <div className="flex items-end gap-1 leading-none">
              <span className="text-5xl font-semibold text-zinc-900 dark:text-zinc-100 tabular-nums">
                {data.temperature}
              </span>
              <span className="text-xl text-zinc-400 mb-1.5">°C</span>
            </div>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 capitalize">
              {data.description} · {data.city}, {data.country}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Feels like", value: `${data.feelsLike}°C` },
              { label: "Humidity", value: `${data.humidity}%` },
              { label: "Wind", value: `${data.windSpeed} km/h` },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="bg-zinc-50 dark:bg-zinc-800 rounded-xl px-3 py-3"
              >
                <p className="text-[11px] text-zinc-400 mb-1">{label}</p>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{value}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
