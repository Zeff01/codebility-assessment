import { headers } from "next/headers";

export async function getBaseUrl() {
  const headersList = await headers();

  const protocol = headersList.get("x-forwarded-proto") ?? "http";

  const host = headersList.get("host");

  if (!host) {
    throw new Error("Host header is missing");
  }

  return `${protocol}://${host}`;
}
