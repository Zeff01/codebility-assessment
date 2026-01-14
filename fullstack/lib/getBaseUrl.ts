import { headers } from "next/headers";

export function getBaseUrl() {
  const headerList = headers();
  const host = headerList.get("host");

  if (!host) return "http://localhost:3000";

  const protocol = host.includes("localhost") || host.startsWith("127.0.0.1") ? "http" : "https";
  return `${protocol}://${host}`;
}
