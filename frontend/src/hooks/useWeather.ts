"use client";

import { useState, useCallback, useRef } from "react";

export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  description: string;
}

interface CacheEntry {
  data: WeatherData;
  timestamp: number;
}

const CACHE_TTL = 5 * 60 * 1000; // 5 minutes
const cache = new Map<string, CacheEntry>();

function wmoDescription(code: number): string {
  if (code === 0) return "Clear sky";
  if (code <= 3) return "Partly cloudy";
  if (code <= 49) return "Foggy";
  if (code <= 67) return "Rainy";
  if (code <= 77) return "Snowy";
  if (code <= 82) return "Showers";
  return "Thunderstorm";
}

export type FetchStatus = "idle" | "loading" | "success" | "error";

export function useWeather() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [status, setStatus] = useState<FetchStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fromCache, setFromCache] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const fetch_ = useCallback(async (city: string, force = false) => {
    if (!city.trim()) return;

    const key = city.toLowerCase().trim();

    if (!force) {
      const cached = cache.get(key);
      if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
        setData(cached.data);
        setStatus("success");
        setFromCache(true);
        setError(null);
        return;
      }
    }

    abortRef.current?.abort();
    abortRef.current = new AbortController();
    const signal = abortRef.current.signal;

    setStatus("loading");
    setError(null);
    setFromCache(false);

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`,
        { signal }
      );
      const geoJson = await geoRes.json();
      if (!geoJson.results?.length) throw new Error("City not found");
      const geo = geoJson.results[0];

      const wxRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${geo.latitude}&longitude=${geo.longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code&wind_speed_unit=kmh&timezone=auto`,
        { signal }
      );
      const wxJson = await wxRes.json();
      const c = wxJson.current;

      const result: WeatherData = {
        city: geo.name,
        country: geo.country_code,
        temperature: Math.round(c.temperature_2m),
        feelsLike: Math.round(c.apparent_temperature),
        humidity: Math.round(c.relative_humidity_2m),
        windSpeed: Math.round(c.wind_speed_10m),
        description: wmoDescription(c.weather_code),
      };

      cache.set(key, { data: result, timestamp: Date.now() });
      setData(result);
      setStatus("success");
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setError((err as Error).message || "Failed to fetch weather");
      setStatus("error");
    }
  }, []);

  return { data, status, error, fromCache, fetch: fetch_ };
}
