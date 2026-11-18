import { describe, expect, it } from "vitest";
import {
  exceedsBodyLimit,
  getClientIp,
  hasValidPathEncoding,
  isJsonContentType,
  isMutation,
  isSameOrigin,
} from "./request-guards";

const url = "http://shop.test/api/cart/items";

describe("isMutation", () => {
  it("flags state-changing methods", () => {
    expect(isMutation("POST")).toBe(true);
    expect(isMutation("delete")).toBe(true);
    expect(isMutation("GET")).toBe(false);
  });
});

describe("isSameOrigin", () => {
  it("accepts same-origin requests", () => {
    const headers = new Headers({ origin: "http://shop.test", "sec-fetch-site": "same-origin" });
    expect(isSameOrigin(headers, url)).toBe(true);
  });

  it("rejects a different origin", () => {
    expect(isSameOrigin(new Headers({ origin: "https://evil.test" }), url)).toBe(false);
  });

  it("rejects cross-site fetch metadata even if origin is missing", () => {
    expect(isSameOrigin(new Headers({ "sec-fetch-site": "cross-site" }), url)).toBe(false);
  });

  it("rejects a malformed origin", () => {
    expect(isSameOrigin(new Headers({ origin: "null" }), url)).toBe(false);
  });

  it("allows non-browser clients without an origin", () => {
    expect(isSameOrigin(new Headers(), url)).toBe(true);
  });
});

describe("isJsonContentType", () => {
  it("accepts application/json with parameters", () => {
    expect(isJsonContentType(new Headers({ "content-type": "application/json; charset=utf-8" }))).toBe(true);
  });

  it("rejects form posts", () => {
    expect(isJsonContentType(new Headers({ "content-type": "text/plain" }))).toBe(false);
    expect(isJsonContentType(new Headers())).toBe(false);
  });
});

describe("exceedsBodyLimit", () => {
  it("compares content-length against the limit", () => {
    expect(exceedsBodyLimit(new Headers({ "content-length": "10" }), 100)).toBe(false);
    expect(exceedsBodyLimit(new Headers({ "content-length": "101" }), 100)).toBe(true);
    expect(exceedsBodyLimit(new Headers(), 100)).toBe(false);
  });
});

describe("getClientIp", () => {
  const spoofed = new Headers({ "x-real-ip": "1.1.1.1", "x-forwarded-for": "2.2.2.2, 3.3.3.3" });

  it("ignores forwarding headers unless a proxy is trusted", () => {
    expect(getClientIp(spoofed)).toBeNull();
  });

  it("uses x-real-ip when the platform sets it", () => {
    expect(getClientIp(spoofed, { trustRealIp: true })).toBe("1.1.1.1");
  });

  it("takes the address added by the last trusted proxy, not the client supplied one", () => {
    const headers = new Headers({ "x-forwarded-for": "6.6.6.6, 203.0.113.7" });

    expect(getClientIp(headers, { trustedProxyHops: 1 })).toBe("203.0.113.7");
    expect(getClientIp(headers, { trustedProxyHops: 2 })).toBe("6.6.6.6");
  });

  it("returns null when the chain is shorter than the trusted hops", () => {
    const headers = new Headers({ "x-forwarded-for": "203.0.113.7" });
    expect(getClientIp(headers, { trustedProxyHops: 2 })).toBeNull();
  });

  it("rejects values that are not IP addresses", () => {
    expect(getClientIp(new Headers({ "x-real-ip": "<script>" }), { trustRealIp: true })).toBeNull();
    expect(getClientIp(new Headers({ "x-forwarded-for": "evil" }), { trustedProxyHops: 1 })).toBeNull();
  });
});

describe("hasValidPathEncoding", () => {
  it("accepts normal and encoded paths", () => {
    expect(hasValidPathEncoding("/api/products/aurora-wireless-headphones")).toBe(true);
    expect(hasValidPathEncoding("/api/products/caf%C3%A9")).toBe(true);
  });

  it("rejects malformed percent-encoding", () => {
    expect(hasValidPathEncoding("/api/products/%E0%A4%A")).toBe(false);
    expect(hasValidPathEncoding("/products/%")).toBe(false);
  });
});
