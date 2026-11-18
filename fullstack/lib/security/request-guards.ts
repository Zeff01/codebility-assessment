const MUTATING_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);
const METHODS_WITH_BODY = new Set(["POST", "PUT", "PATCH"]);

export const MAX_JSON_BODY_BYTES = 4 * 1024;

export function isMutation(method: string) {
  return MUTATING_METHODS.has(method.toUpperCase());
}

export function expectsBody(method: string) {
  return METHODS_WITH_BODY.has(method.toUpperCase());
}

// Rejects cross-site requests to state-changing endpoints (CSRF).
// Browsers always send Origin on POST/PATCH/DELETE, so a missing header
// means a non-browser client, which is allowed.
export function isSameOrigin(headers: Headers, requestUrl: string) {
  const fetchSite = headers.get("sec-fetch-site");
  if (fetchSite && fetchSite !== "same-origin" && fetchSite !== "none") {
    return false;
  }

  const origin = headers.get("origin");
  if (!origin) return true;

  try {
    return new URL(origin).host === new URL(requestUrl).host;
  } catch {
    return false;
  }
}

export function hasValidPathEncoding(pathname: string) {
  try {
    decodeURIComponent(pathname);
    return true;
  } catch {
    return false;
  }
}

export function isJsonContentType(headers: Headers) {
  const contentType = headers.get("content-type") ?? "";
  return contentType.split(";")[0].trim().toLowerCase() === "application/json";
}

export function exceedsBodyLimit(headers: Headers, limit = MAX_JSON_BODY_BYTES) {
  const length = Number(headers.get("content-length") ?? 0);
  return Number.isFinite(length) && length > limit;
}

export type ClientIpOptions = {
  // Set when the platform overwrites x-real-ip itself (e.g. Vercel).
  trustRealIp?: boolean;
  // Number of reverse proxies in front of the app that append to x-forwarded-for.
  trustedProxyHops?: number;
};

const IP_PATTERN = /^[0-9a-f.:]{2,45}$/i;

// Forwarding headers are client-controlled unless a proxy we trust sets them,
// so they are only read when the deployment says so. Returns null when the
// client can't be identified reliably.
export function getClientIp(
  headers: Headers,
  { trustRealIp = false, trustedProxyHops = 0 }: ClientIpOptions = {},
): string | null {
  if (trustRealIp) {
    const realIp = headers.get("x-real-ip")?.trim();
    if (realIp && IP_PATTERN.test(realIp)) return realIp;
  }

  if (trustedProxyHops > 0) {
    const chain = (headers.get("x-forwarded-for") ?? "")
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean);
    // Each trusted proxy appends the address it received the request from,
    // so the client is `hops` entries from the end. Anything before that is spoofable.
    const ip = chain[chain.length - trustedProxyHops];
    if (ip && IP_PATTERN.test(ip)) return ip;
  }

  return null;
}
