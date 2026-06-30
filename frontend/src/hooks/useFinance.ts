"use client";

import { useState, useCallback, useRef } from "react";

export interface StockQuote {
  ticker: string;
  name: string;
  price: number;
  changePercent: number;
}

interface CacheEntry {
  data: StockQuote[];
  timestamp: number;
}

const CACHE_TTL = 5 * 60 * 1000;
let cache: CacheEntry | null = null;

// Realistic base prices — in production these come from Finnhub via a Next.js API route
// to avoid exposing the API key on the client.
const BASE_QUOTES: StockQuote[] = [
  { ticker: "AAPL", name: "Apple Inc.", price: 213.49, changePercent: 1.24 },
  { ticker: "NVDA", name: "NVIDIA Corp.", price: 131.38, changePercent: 3.71 },
  { ticker: "MSFT", name: "Microsoft Corp.", price: 447.62, changePercent: -0.83 },
  { ticker: "BTC", name: "Bitcoin", price: 67240, changePercent: -1.52 },
  { ticker: "ETH", name: "Ethereum", price: 3491.2, changePercent: 2.18 },
  { ticker: "SPY", name: "S&P 500 ETF", price: 545.11, changePercent: 0.41 },
];

function addNoise(val: number, pct: number) {
  return val + val * pct * (Math.random() * 2 - 1);
}

function simulateFetch(): Promise<StockQuote[]> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(
        BASE_QUOTES.map((q) => ({
          ...q,
          price: addNoise(q.price, 0.005),
          changePercent: addNoise(q.changePercent, 0.2),
        }))
      );
    }, 600)
  );
}

export type FetchStatus = "idle" | "loading" | "success" | "error";

export function useFinance() {
  const [data, setData] = useState<StockQuote[]>([]);
  const [status, setStatus] = useState<FetchStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fromCache, setFromCache] = useState(false);
  const isFetching = useRef(false);

  const fetch_ = useCallback(async (force = false) => {
    if (isFetching.current) return;

    if (!force && cache && Date.now() - cache.timestamp < CACHE_TTL) {
      setData(cache.data);
      setStatus("success");
      setFromCache(true);
      return;
    }

    isFetching.current = true;
    setStatus("loading");
    setError(null);
    setFromCache(false);

    try {
      // In production: fetch('/api/quotes') — a Next.js route handler that
      // calls Finnhub server-side, keeping the API key out of the browser.
      const quotes = await simulateFetch();
      cache = { data: quotes, timestamp: Date.now() };
      setData(quotes);
      setStatus("success");
    } catch (err) {
      setError((err as Error).message || "Failed to fetch market data");
      setStatus("error");
    } finally {
      isFetching.current = false;
    }
  }, []);

  return { data, status, error, fromCache, fetch: fetch_ };
}
