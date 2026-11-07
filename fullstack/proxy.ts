import { NextResponse, type NextRequest } from "next/server";

import { PRODUCTS } from "@/lib/catalog";

/**
 * Edge proxy (Next 16's middleware).
 *
 * Why this exists: with `cacheComponents` enabled, an unknown `/products/:id`
 * would stream the prerendered shell (HTTP 200) and only swap in the
 * not-found UI as streamed content — a "soft 404" a crawler can't distinguish
 * from a real page. `notFound()` can't fix the status once the shell is on
 * the wire, so unknown slugs are answered HERE, before streaming starts,
 * with a real 404 and the same not-found presentation. The catalog is
 * fully enumerated, so this set is cheap and edge-safe (plain data, no
 * Node APIs).
 *
 * /products/aurora-one → NextResponse.next() (the prerendered page)
 * /products/ghost      → real 404 + branded not-found HTML
 */

const PRODUCT_IDS = new Set(PRODUCTS.map((p) => p.id));

const NOT_FOUND_HTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex">
  <title>404 — Aurora Supply</title>
</head>
<body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f7f6f3;color:#1c1917;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;text-align:center;padding:24px">
  <div>
    <p style="font-size:12px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:#b45309;margin:0">404</p>
    <h1 style="font-size:30px;font-weight:600;margin:12px 0 8px;letter-spacing:-.02em">That page left the warehouse.</h1>
    <p style="color:#57534e;font-size:14px;margin:0 0 24px">The product you're looking for isn't in the catalog.</p>
    <a href="/" style="display:inline-block;background:#1c1917;color:#ffffff;border-radius:9999px;padding:10px 20px;font-size:14px;font-weight:500;text-decoration:none">Browse the catalog</a>
  </div>
</body>
</html>`;

export function proxy(request: NextRequest) {
  const match = request.nextUrl.pathname.match(/^\/products\/([^/]+)\/?$/);

  if (match && !PRODUCT_IDS.has(decodeURIComponent(match[1]))) {
    return new NextResponse(NOT_FOUND_HTML, {
      status: 404,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path*"],
};
