import { expect, test } from "@playwright/test";

test.describe("security", () => {
  test("pages send security headers", async ({ request }) => {
    const res = await request.get("/");
    const headers = res.headers();

    expect(headers["content-security-policy"]).toContain("frame-ancestors 'none'");
    expect(headers["x-frame-options"]).toBe("DENY");
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["x-powered-by"]).toBeUndefined();
  });

  test("rejects cross-site cart mutations", async ({ request }) => {
    const res = await request.post("/api/cart/items", {
      headers: { origin: "https://evil.test", "sec-fetch-site": "cross-site" },
      data: { productId: "prd_001", quantity: 1 },
    });

    expect(res.status()).toBe(403);
  });

  test("rejects client supplied prices", async ({ request }) => {
    const res = await request.post("/api/cart/items", {
      data: { productId: "prd_001", quantity: 1, price: 0.01 },
    });

    expect(res.status()).toBe(400);
  });

  test("page loads without CSP violations", async ({ page }) => {
    const violations: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error" && /Content Security Policy/i.test(message.text())) {
        violations.push(message.text());
      }
    });

    await page.goto("/products/aurora-wireless-headphones");
    await expect(page.getByRole("button", { name: "Add to cart" })).toBeEnabled();

    expect(violations).toEqual([]);
  });
});
