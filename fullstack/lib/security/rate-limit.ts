type Bucket = { count: number; resetAt: number };

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  resetAt: number;
};

type RateLimiterOptions = {
  limit: number;
  windowMs: number;
  maxKeys?: number;
};

// Fixed-window limiter kept in process memory. Good enough for a single instance;
// swap for Redis/Upstash when running multiple instances.
export function createRateLimiter({ limit, windowMs, maxKeys = 10_000 }: RateLimiterOptions) {
  const buckets = new Map<string, Bucket>();

  function prune(now: number) {
    for (const [key, bucket] of buckets) {
      if (bucket.resetAt <= now) buckets.delete(key);
    }
  }

  return {
    check(key: string, now = Date.now()): RateLimitResult {
      if (buckets.size >= maxKeys) prune(now);
      if (buckets.size >= maxKeys && !buckets.has(key)) {
        // Still full of live buckets: drop the oldest so memory stays bounded.
        buckets.delete(buckets.keys().next().value!);
      }

      let bucket = buckets.get(key);
      if (!bucket || bucket.resetAt <= now) {
        bucket = { count: 0, resetAt: now + windowMs };
        buckets.set(key, bucket);
      }

      bucket.count += 1;

      return {
        allowed: bucket.count <= limit,
        remaining: Math.max(limit - bucket.count, 0),
        resetAt: bucket.resetAt,
      };
    },

    reset() {
      buckets.clear();
    },

    get size() {
      return buckets.size;
    },
  };
}
