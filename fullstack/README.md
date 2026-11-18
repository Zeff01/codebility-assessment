# Northwave Store

A small e-commerce slice built with Next.js 16 (App Router): a product listing, a product detail page and a shopping cart, backed by API routes and a JSON-file database.

**Stack:** Next.js 16 with Cache Components, React 19, TypeScript, Tailwind CSS 4, Zod, Vitest and React Testing Library.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` / `npm start` | Production build and server |
| `npm test` | Run unit tests once |
| `npm run test:watch` | Tests in watch mode |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm run test:e2e` | End-to-end tests (Playwright) |

## Project structure

The code is organized by feature. Everything a feature needs (UI, server logic, client state, validation, types) lives in one folder. `app/` only holds routing: pages, layouts and route handlers stay thin and call into the features.

```
data/                     JSON database: products.json (seed data), carts.json (created at runtime)
app/                      Routing only
  page.tsx                Product listing
  products/[slug]/        Detail page, plus loading / error / not-found
  cart/page.tsx           Cart page
  api/                    Route handlers (thin: validate → call service → respond)
features/
  products/
    components/           ProductGallery (client), ProductInfo, ProductCard, skeletons…
    services/             Catalog access with caching ('use cache')
    schemas.ts            Catalog, query and slug validation
  cart/
    components/           AddToCartForm, CartView, CartLineItem, CartButton…
    context/              CartProvider + optimistic reducer
    hooks/                useCartState / useCartActions
    server/               Cart service (pricing, stock rules) and cart repository (storage)
    api/                  Typed client for the cart endpoints
    lib/                  Pure totals/shipping logic, shared by client and server
    schemas.ts            Request payload validation
components/               Shared UI (Button, Skeleton, Badge, Header, ErrorState)
lib/                      Cross-cutting: JSON store, API response/error helpers, security guards, formatting
proxy.ts                  Request guards for /api/*
test/                     Test setup, factories, stubs
```

Rules I followed:

- **Features don't reach into each other's internals.** The cart uses the product service's public functions and types, and nothing deeper.
- **Server-only code is marked.** The JSON store and the cart service import `server-only`, so the build fails if either ever ends up in a client bundle.
- **Storage sits behind a repository.** Only `cart.repository.ts` and `getCatalog()` know the data lives in JSON files. Moving to Postgres or Redis means replacing those two, and nothing else changes.
- **Business rules live in pure functions.** Totals and shipping live in `features/cart/lib/totals.ts`. The server uses them for the real cart and the client uses them for optimistic updates, so the two can't drift apart.
- **Tests sit next to the code they cover.**

## Architecture decisions

### Server vs client components

The detail page is a server component. It fetches the product, renders the details and builds `generateMetadata`. Only the parts that need the browser are client components:

- `ProductGallery`: thumbnail switching.
- `AddToCartForm`: quantity, pending state and errors.
- Cart UI: the header badge and the cart page.

Most of the page ships as HTML, with very little JavaScript.

### Data fetching and caching

`cacheComponents` is enabled. The catalog lives in `data/products.json` and is validated with Zod when it's read, so a bad edit fails loudly instead of rendering broken data. It's read once through a single `'use cache'` function (`getCatalog`) with `cacheLife('hours')` and `cacheTag('products')`, and every lookup (by slug, related products, id map) reads from that cached result. To refresh the catalog after an edit, call `revalidateTag('products')`.

The detail page uses `generateStaticParams`, so every product page is prerendered at build time. Unknown slugs fall back to request-time rendering and hit `notFound()`. Related products stream in their own `<Suspense>` boundary, so they never hold up the main content.

### Loading and error states

- `loading.tsx` shows a skeleton that matches the final layout, so nothing jumps when content arrives.
- `error.tsx` is defined at the root and on the product route, with a retry button.
- Each level has its own `not-found.tsx`.
- Expected API failures, like a bad quantity or no stock, are returned as values and shown inline. They aren't thrown.

### Images

All images go through `next/image`:

- On the product page, the main image uses `preload`, because it's the LCP element. Thumbnails lazy-load.
- On the listing, only the first card's image is preloaded. On mobile it's the only one in view, and preloading more images competes with it. The next three load eagerly at normal priority (they're above the fold on desktop), and the rest lazy-load.
- Each image declares `sizes` that match the real layout (container width, columns, gutters), so the browser downloads the right width.
- AVIF and WebP are enabled.
- `remotePatterns` only allows the one image host and path in use.

### Data storage

The app uses JSON files as a small database (`data/`). Each file is a table, accessed through `lib/db/json-store.ts`:

| Table | Contents |
| --- | --- |
| `products.json` | The catalog. Seed data, committed to the repo. |
| `carts.json` | Carts keyed by cart id: `{ items: [{ productId, quantity }], updatedAt }`. Created at runtime, gitignored. |

The store has three properties that matter:

- **No lost updates.** Every change runs as read → modify → write while holding a per-table lock, so two requests changing carts at the same moment can't overwrite each other. If the change throws, for example on a stock check, nothing is written.
- **No half-written files.** Writes go to a temp file that is then renamed over the original. Rename is atomic, so a crash mid-write leaves the old file intact.
- **Fast reads.** The parsed, validated table is kept in memory and reused until the file's modification time changes. Hand edits to the file are still picked up.

### Cart persistence

The cart lives on the server in `carts.json`. The browser only gets an httpOnly cookie with an opaque cart id (a random UUID). All reads and writes go through the API.

- **The server is the source of truth.** Prices, stock checks and totals are always computed from the catalog. The client only ever sends a product id and a quantity.
- **The cookie carries no data.** Editing it can't change the cart's contents. The server only accepts ids it issued itself: an id that is malformed or not in the store is ignored, and a new one is created on the next add.
- **Carts expire.** On every write, carts older than 30 days are dropped, and the table is capped at 10,000 carts.

When a cart is read, products that no longer exist or are out of stock are dropped, and quantities are clamped to the current stock.

**Limits.** A JSON file suits a single server instance. Every write rewrites the whole cart file, so write throughput drops as the table grows: about 120–280 writes/s locally, versus about 1,100–1,400 reads/s. Serverless hosts also have read-only or per-instance file systems. For production, the repository would move to Postgres or Redis without touching the rest of the app.

### State management

The cart runs on a React Context with `useOptimistic`, and doesn't use an external store. The state is small, has one owner, and the server is the source of truth. A store library would add a dependency without solving a real problem here.

- **Optimistic updates.** Adding, updating and removing items show up instantly. If the request fails, React drops the optimistic state and the cart rolls back on its own.
- **Requests are sent in order.** Mutations go through a small promise queue, so the optimistic state and the server's responses always line up. The server also serializes writes on its side (see Data storage).
- **State and actions are split** into separate contexts. Components that only trigger actions (like `CartLineItem`, which is also memoized) don't re-render on every cart change.

## API

Every response uses the same shape:

```json
{ "data": ... }
{ "error": { "code": "CONFLICT", "message": "Only 5 of Halo Smart Speaker can be added", "details": { "available": 5 } } }
```

| Method | Endpoint | Body | Notes |
| --- | --- | --- | --- |
| GET | `/api/products?category=&limit=` | | List (summaries) |
| GET | `/api/products/:slug` | | Detail. Returns 404 if the product doesn't exist |
| GET | `/api/cart` | | Current cart with totals |
| DELETE | `/api/cart` | | Clear cart |
| POST | `/api/cart/items` | `{ productId, quantity? }` | Add, or merge into an existing line |
| PATCH | `/api/cart/items/:productId` | `{ quantity }` | Set quantity |
| DELETE | `/api/cart/items/:productId` | | Remove line |

Status codes:

| Code | Meaning |
| --- | --- |
| 400 | Validation error or malformed JSON |
| 403 | Cross-site request |
| 404 | Unknown product, or the item isn't in the cart |
| 409 | Stock or cart limits |
| 413 | Body too large |
| 415 | Not JSON |
| 429 | Rate limited |
| 500 | Unexpected error |

Route handlers are wrapped in `withErrorHandling` (`lib/api.ts`), which maps `ApiError` and `ZodError` to responses. Unexpected errors are logged on the server and return a generic 500, so stack traces and internal messages never reach the client. Next.js internal errors are re-thrown with `unstable_rethrow` so prerendering keeps working.

## Security

These measures came from looking at what this app actually exposes: an API that changes server-side state identified by a cookie, plus pages that render product data.

| Measure | Where | Why |
| --- | --- | --- |
| **Server-side pricing** | `cart.service.ts` | The client only ever sends `productId` and `quantity`. Prices and totals always come from the catalog, so a modified request can't change what the user pays. |
| **Strict payload validation** | `features/*/schemas.ts` | Zod `strictObject` rejects unknown keys. For example, a `price` field returns 400 instead of being silently ignored. IDs and slugs must match a strict format, which blocks path tricks like `../` and odd input before it reaches any lookup. Quantity is limited to 1–10. |
| **Opaque, hardened cart cookie** | `cart.service.ts` | The cookie holds only a random UUID, never cart contents. Ids are validated, and only ids the server issued and still has are accepted, so a client can't choose or forge one. `httpOnly`, so scripts can't read it (limits damage from XSS). `SameSite=Lax`, so it isn't sent on cross-site POSTs. `Secure` in production. 30-day expiry. |
| **Bounded storage** | `cart.repository.ts` | At most 20 distinct products per cart, expired carts pruned, and at most 10,000 stored carts, so nobody can grow the data file without bound. File paths are fixed in code and never built from user input. |
| **Validated data on read** | `features/*/schemas.ts` | `products.json` and `carts.json` are both validated with Zod when they're read. A corrupt cart table returns a 500 instead of silently wiping every cart. |
| **CSRF protection** | `proxy.ts` | Requests that change state must come from our own origin. The check uses `Sec-Fetch-Site` and `Origin`, and other origins get 403. This works together with `SameSite=Lax`, because SameSite alone doesn't cover every browser or same-site subdomains. |
| **Content-Type enforcement** | `proxy.ts` | Bodies must be `application/json`. A plain HTML form can't send JSON, so this closes the classic "form POST to the API" CSRF route. |
| **Body size limits** | `proxy.ts`, `readJson` | Requests over 4KB are rejected early using `Content-Length`. The handler checks the size again after reading, because chunked requests don't send `Content-Length`. Small payloads only, so nobody can tie up memory with huge bodies. |
| **Rate limiting** | `proxy.ts`, `lib/security/` | 30 writes and 120 reads per minute per client. It slows down scripted abuse of the cart and catalog endpoints. Forwarding headers like `x-forwarded-for` can be set by the client, so they are only trusted when the deployment says a proxy sets them (see below). Otherwise every request shares one bucket, so faking a new IP on each request doesn't get a fresh limit. The bucket map is capped, so it can't be used to exhaust memory. |
| **Malformed URLs** | `proxy.ts` | Paths with invalid percent-encoding (e.g. `%E0%A4%A`) are rejected with 400. Without this, Next.js fails while decoding route params and returns a 500. |
| **Security headers** | `next.config.ts` | A CSP restricts where scripts, styles, images and connections can load from, with `frame-ancestors 'none'` and `object-src 'none'`. Also `X-Frame-Options: DENY` (clickjacking), `nosniff`, a strict `Referrer-Policy`, a `Permissions-Policy` that disables camera, mic, location and payment, COOP, and HSTS in production. `X-Powered-By` is removed. |
| **No information leaks** | `lib/api.ts` | 500 responses are generic, and details only go to the server log. |
| **Image proxy allowlist** | `next.config.ts` | `remotePatterns` only allows `picsum.photos/seed/**`, so nobody can use `/_next/image` as an open proxy. `qualities` is restricted too. |

### Configuration

| Env var | Default | Use |
| --- | --- | --- |
| `TRUST_REAL_IP` | `false` (`true` on Vercel) | Use `x-real-ip`, which the platform sets itself |
| `TRUSTED_PROXY_HOPS` | `0` | Number of reverse proxies in front of the app. The client IP is read that many entries from the end of `x-forwarded-for`, which skips anything the client added itself |
| `RATE_LIMIT_READS_PER_MINUTE` | `120` | |
| `RATE_LIMIT_WRITES_PER_MINUTE` | `30` | |
| `DATA_DIR` | `./data` | Where the JSON tables live. Point it at a persistent volume in production. |

When no trusted source is configured in production, the proxy logs a warning once.

### Known issue: `TRACE` requests

A `TRACE` request to any route covered by `proxy.ts` (`/api/*`, `/products/*`) returns a 500. Other routes correctly return 405.

Before calling the proxy, Next.js turns the request into a Web `Request`, and Node's built-in fetch doesn't allow the `TRACE` method. That throws inside the framework before any app code runs, so it can't be caught in `proxy.ts`. It has no security impact: the body is a generic "Internal Server Error" with no details, and the request does nothing. It does show up in scanners and in the server log.

It's handled in front of the app instead. With nginx:

```nginx
location / {
    if ($request_method = TRACE) {
        return 405;
    }

    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

With this setup, run the app with `TRUSTED_PROXY_HOPS=1`. nginx appends the real client IP to `X-Forwarded-For`, which is the entry the rate limiter reads. On a CDN (Cloudflare, an AWS load balancer), the same can be done with a rule that blocks the `TRACE` method.

## Testing

```bash
npm test           # unit tests (Vitest)
npm run test:e2e   # end-to-end tests (Playwright)
```

The first E2E run needs a browser: `npx playwright install chromium`.

### Unit tests

There are 121 tests across 14 files, next to the code they cover:

- **Pure logic:** totals and shipping, the optimistic reducer, schemas, the rate limiter, request guards.
- **Storage:** the JSON store and the cart repository, run against a throwaway data directory. Covers concurrent updates (no lost writes), aborted updates writing nothing, no leftover temp files, hand edits being picked up, cart expiry, and corrupt tables being refused instead of wiped.
- **Server:** the cart service with a fake cookie store. Covers forged and malformed cart ids, concurrent adds to one cart, stock rules, limits and status codes. Also the product service, the API error helpers, and `proxy.ts` (CSRF, content type, body size, rate limits).
- **Components:** `QuantitySelector`, `AddToCartForm`, and `CartProvider`. The provider tests cover optimistic updates, rollback on failure, and the request queue.

### End-to-end tests

Vitest can't render async server components, so the full pages are covered with Playwright in `e2e/`. They run against a production build (`next build && next start`), so caching, prerendering and the security headers are tested exactly as they ship. Every test runs on desktop Chrome and on a mobile viewport (Pixel 7).

- **Product:** listing to detail navigation, page title and metadata, gallery thumbnail switching, optimized image URLs, related products streaming in, sold-out state, and the not-found page.
- **Cart:**
  - adding updates the header summary;
  - the cart survives a reload;
  - totals and free shipping on the cart page;
  - updating quantity persists, and removing items shows the empty state;
  - quantity is capped at the available stock.
- **Security:** security headers are present, cross-site mutations get 403, client-supplied prices are rejected, and the page loads with no CSP violations.

## Performance

Measured with Lighthouse 12 against the production build (`next build && next start`). Mobile uses Lighthouse's default throttling: simulated slow 4G and a 4x slower CPU. Mobile performance and metrics are the median of three runs, because single runs vary by a few points.

| Page | Device | Performance | Accessibility | Best Practices | SEO | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Home | Desktop | 100 | 100 | 100 | 100 | 0.6 s | 0 ms | 0 |
| Product | Desktop | 100 | 100 | 100 | 100 | 0.7 s | 0 ms | 0.017 |
| Cart | Desktop | 100 | 100 | 100 | 100 | 0.6 s | 7 ms | 0 |
| Home | Mobile | 93 | 100 | 100 | 100 | 3.0 s | 132 ms | 0.001 |
| Product | Mobile | 92 | 100 | 100 | 100 | 3.2 s | 138 ms | 0.001 |
| Cart | Mobile | 96 | 100 | 100 | 100 | 2.6 s | 125 ms | 0.001 |

LCP is when the largest visible element appears. TBT is how long the page is too busy to respond to input.

Changes made after the first audit:

- **Home, mobile, performance: 69 → 93.** Before, the first four listing images were all preloaded, and on mobile they competed with the one image in view. Now only the first is preloaded, and `sizes` was tightened to the real layout.
- **Accessibility: 94–96 → 100 on every page.** Muted text was raised to meet WCAG AA contrast in both themes. Card headings follow the page outline: `h2` on the listing, `h3` under "You may also like". The cart button's accessible name now includes its visible text, which matters for voice control.

The redesign was measured too. It briefly cost a few points on mobile, and the cart page got a 0.11 layout shift, so it was adjusted:

- **Layout shift:** while the cart loads, its area keeps a minimum height, so the new footer no longer jumps when the skeleton is replaced.
- **Rendering cost:** the hero's decorative glows are plain radial gradients rather than CSS `blur` filters, which are expensive on low-end phones.
- **Fonts:** the display font loads one weight only, and an unused monospace font was removed.

Two warnings remain, on purpose:

- **"Image larger than needed" on mobile.** Lighthouse compares the 750px image with the 380 CSS px it's displayed at, and ignores the emulated 1.75x pixel density, where it needs about 665 real pixels. A smaller file would look blurry on real phones.
- **About 3 s mobile LCP.** The LCP image downloads in about 110 ms. Most of the rest is the throttled CPU running JavaScript.
