import { NextRequest } from "next/server";
import { describe, expect, it, vi } from "vitest";
import { proxy } from "./proxy";

vi.mock("@/lib/security/config", () => ({
  clientIpOptions: { trustRealIp: true, trustedProxyHops: 0 },
  rateLimits: { readsPerMinute: 120, writesPerMinute: 30 },
}));

let ipCounter = 0;
const nextIp = () => `10.0.0.${++ipCounter}`;

function request(
  method: string,
  init: { headers?: Record<string, string>; body?: string; ip?: string; path?: string } = {},
) {
  return new NextRequest(`http://shop.test${init.path ?? "/api/cart/items"}`, {
    method,
    body: init.body,
    headers: {
      "x-real-ip": init.ip ?? nextIp(),
      ...init.headers,
    },
  });
}

const sameOriginJson = {
  origin: "http://shop.test",
  "sec-fetch-site": "same-origin",
  "content-type": "application/json",
};

const isPassThrough = (res: Response) => res.headers.get("x-middleware-next") === "1";

describe("proxy", () => {
  it("lets same-origin JSON mutations through", () => {
    const res = proxy(request("POST", { headers: sameOriginJson, body: "{}" }));
    expect(isPassThrough(res)).toBe(true);
  });

  it("lets reads through without origin checks", () => {
    expect(isPassThrough(proxy(request("GET", { headers: { origin: "https://evil.test" } })))).toBe(true);
  });

  it("rejects malformed URLs before Next decodes them", async () => {
    const api = proxy(request("GET", { path: "/api/products/%E0%A4%A" }));
    expect(api.status).toBe(400);
    expect((await api.json()).error.code).toBe("BAD_REQUEST");

    expect(proxy(request("GET", { path: "/products/%E0%A4%A" })).status).toBe(400);
  });

  it("only applies API guards to API routes", () => {
    const page = proxy(request("POST", { path: "/products/aurora-wireless-headphones", headers: { origin: "https://evil.test" } }));
    expect(isPassThrough(page)).toBe(true);
  });

  it("blocks cross-site mutations", async () => {
    const res = proxy(
      request("DELETE", { headers: { origin: "https://evil.test", "sec-fetch-site": "cross-site" } }),
    );

    expect(res.status).toBe(403);
    expect((await res.json()).error.code).toBe("FORBIDDEN");
  });

  it("requires a JSON content type for requests with a body", () => {
    const res = proxy(
      request("POST", {
        headers: { ...sameOriginJson, "content-type": "text/plain" },
        body: "{}",
      }),
    );
    expect(res.status).toBe(415);
  });

  it("rejects oversized bodies", () => {
    const res = proxy(
      request("PATCH", { headers: { ...sameOriginJson, "content-length": String(64 * 1024) } }),
    );
    expect(res.status).toBe(413);
  });

  it("rate limits writes per client", () => {
    const ip = nextIp();
    const send = () => proxy(request("POST", { headers: sameOriginJson, body: "{}", ip }));

    for (let i = 0; i < 30; i++) {
      expect(isPassThrough(send())).toBe(true);
    }

    const blocked = send();
    expect(blocked.status).toBe(429);
    expect(Number(blocked.headers.get("retry-after"))).toBeGreaterThan(0);
  });

  it("does not give spoofed clients a fresh limit when no proxy is trusted", async () => {
    vi.resetModules();
    vi.doMock("@/lib/security/config", () => ({
      clientIpOptions: { trustRealIp: false, trustedProxyHops: 0 },
      rateLimits: { readsPerMinute: 120, writesPerMinute: 3 },
    }));
    const { proxy: untrustedProxy } = await import("./proxy");

    const statuses = Array.from({ length: 4 }, () =>
      untrustedProxy(request("POST", { headers: sameOriginJson, body: "{}", ip: nextIp() })).status,
    );

    expect(statuses.slice(0, 3).every((status) => status === 200)).toBe(true);
    expect(statuses[3]).toBe(429);
    vi.doUnmock("@/lib/security/config");
  });
});
