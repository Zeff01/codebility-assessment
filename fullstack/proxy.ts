import { NextResponse, type NextRequest } from "next/server";
import { errorResponse } from "@/lib/api";
import { clientIpOptions, rateLimits } from "@/lib/security/config";
import { createRateLimiter } from "@/lib/security/rate-limit";
import {
  exceedsBodyLimit,
  expectsBody,
  getClientIp,
  hasValidPathEncoding,
  isJsonContentType,
  isMutation,
  isSameOrigin,
} from "@/lib/security/request-guards";

const WINDOW_MS = 60_000;
const readLimiter = createRateLimiter({ limit: rateLimits.readsPerMinute, windowMs: WINDOW_MS });
const writeLimiter = createRateLimiter({ limit: rateLimits.writesPerMinute, windowMs: WINDOW_MS });

// Requests we can't attribute to a client share one bucket, so spoofed
// forwarding headers can't be used to get a fresh limit.
const UNIDENTIFIED_CLIENT = "unidentified";

let warnedAboutClientIp = false;

function clientKey(headers: Headers) {
  const ip = getClientIp(headers, clientIpOptions);

  if (!ip && process.env.NODE_ENV === "production" && !warnedAboutClientIp) {
    warnedAboutClientIp = true;
    console.warn(
      "[proxy] client IP is unavailable, all requests share one rate limit bucket. " +
        "Set TRUSTED_PROXY_HOPS or TRUST_REAL_IP when running behind a proxy.",
    );
  }

  return ip ?? UNIDENTIFIED_CLIENT;
}

export function proxy(request: NextRequest) {
  const { method, headers, nextUrl } = request;

  // Next throws a 500 while decoding params for malformed URLs, so reject them first.
  if (!hasValidPathEncoding(nextUrl.pathname)) {
    return nextUrl.pathname.startsWith("/api/")
      ? errorResponse(400, "BAD_REQUEST", "Malformed URL")
      : new Response("Bad Request", { status: 400 });
  }

  if (!nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const mutation = isMutation(method);

  const limiter = mutation ? writeLimiter : readLimiter;
  const rate = limiter.check(clientKey(headers));

  if (!rate.allowed) {
    const retryAfter = Math.ceil((rate.resetAt - Date.now()) / 1000);
    return errorResponse(429, "TOO_MANY_REQUESTS", "Too many requests, slow down a little", {
      headers: { "Retry-After": String(retryAfter) },
    });
  }

  if (mutation && !isSameOrigin(headers, request.url)) {
    return errorResponse(403, "FORBIDDEN", "Cross-site requests are not allowed");
  }

  if (expectsBody(method)) {
    if (!isJsonContentType(headers)) {
      return errorResponse(415, "UNSUPPORTED_MEDIA_TYPE", "Content-Type must be application/json");
    }
    if (exceedsBodyLimit(headers)) {
      return errorResponse(413, "PAYLOAD_TOO_LARGE", "Request body is too large");
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/products/:path*"],
};
