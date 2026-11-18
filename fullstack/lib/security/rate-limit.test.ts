import { describe, expect, it } from "vitest";
import { createRateLimiter } from "./rate-limit";

describe("createRateLimiter", () => {
  it("allows requests up to the limit within a window", () => {
    const limiter = createRateLimiter({ limit: 2, windowMs: 1000 });

    expect(limiter.check("ip", 0)).toMatchObject({ allowed: true, remaining: 1 });
    expect(limiter.check("ip", 10)).toMatchObject({ allowed: true, remaining: 0 });
    expect(limiter.check("ip", 20)).toMatchObject({ allowed: false, remaining: 0 });
  });

  it("resets after the window passes", () => {
    const limiter = createRateLimiter({ limit: 1, windowMs: 1000 });

    limiter.check("ip", 0);
    expect(limiter.check("ip", 500).allowed).toBe(false);
    expect(limiter.check("ip", 1000).allowed).toBe(true);
  });

  it("tracks keys independently", () => {
    const limiter = createRateLimiter({ limit: 1, windowMs: 1000 });

    limiter.check("a", 0);
    expect(limiter.check("a", 1).allowed).toBe(false);
    expect(limiter.check("b", 1).allowed).toBe(true);
  });

  it("evicts expired buckets once the key cap is reached", () => {
    const limiter = createRateLimiter({ limit: 1, windowMs: 100, maxKeys: 2 });

    limiter.check("a", 0);
    limiter.check("b", 0);
    expect(limiter.size).toBe(2);

    limiter.check("c", 200);
    expect(limiter.size).toBe(1);
  });

  it("never grows past the key cap, even when every bucket is live", () => {
    const limiter = createRateLimiter({ limit: 1, windowMs: 60_000, maxKeys: 3 });

    for (let i = 0; i < 1000; i++) {
      limiter.check(`ip-${i}`, i);
    }

    expect(limiter.size).toBe(3);
  });
});
