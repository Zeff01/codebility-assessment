import type { ClientIpOptions } from "./request-guards";

function toPositiveInt(value: string | undefined, fallback: number) {
  const parsed = Number.parseInt(value ?? "", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export const clientIpOptions: ClientIpOptions = {
  trustRealIp: process.env.VERCEL === "1" || process.env.TRUST_REAL_IP === "true",
  trustedProxyHops: toPositiveInt(process.env.TRUSTED_PROXY_HOPS, 0),
};

export const rateLimits = {
  readsPerMinute: toPositiveInt(process.env.RATE_LIMIT_READS_PER_MINUTE, 120),
  writesPerMinute: toPositiveInt(process.env.RATE_LIMIT_WRITES_PER_MINUTE, 30),
};
