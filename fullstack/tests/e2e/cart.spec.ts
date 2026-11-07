/**
 * End-to-end: the brief's acceptance flow — add to cart, drawer opens with
 * correct totals, cart SURVIVES a full page reload (cookie persistence,
 * verified through a real browser cookie jar), sold-out branch never lies,
 * unknown product 404s.
 */

import { expect, test } from "@playwright/test";

test("add to cart → drawer totals → persists across a full reload", async ({ page }) => {
  await page.goto("/products/aurora-one");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Aurora One");

  // A fresh context starts with an empty badge.
  await expect(page.getByRole("button", { name: "Open cart", exact: true })).toBeVisible();

  // Add one unit — the drawer must open on success.
  await page.getByRole("button", { name: "Add to cart — $349.00" }).click();

  const drawer = page.getByRole("dialog", { name: "Shopping cart" });
  await expect(drawer).toBeVisible();
  await expect(drawer.getByText("Aurora One")).toBeVisible();
  await expect(drawer.locator("footer")).toContainText("$349.00");

  // Badge reflects the count for screen readers and sighted users alike.
  await expect(page.getByRole("button", { name: "Open cart, 1 item" })).toBeVisible();

  // Stepper up → $698.00.
  await drawer.getByRole("button", { name: "Increase quantity of Aurora One" }).click();
  await expect(page.getByRole("button", { name: "Open cart, 2 items" })).toBeVisible();

  // Full reload — the httpOnly cookie is the cart's persistence layer.
  await drawer.locator("aside").getByRole("button", { name: "Close cart" }).click();
  await page.reload();

  await expect(page.getByRole("button", { name: "Open cart, 2 items" })).toBeVisible();

  // Removing the line lands back on the empty state (fresh-visitor state).
  await page.getByRole("button", { name: "Open cart, 2 items" }).click();
  await drawer.getByRole("button", { name: "Remove" }).click();
  await expect(drawer.getByText("Your cart is empty")).toBeVisible();
});

test("sold-out product can't be added (button never lies)", async ({ page }) => {
  await page.goto("/products/drift-buds");

  const soldOut = page.getByRole("button", { name: "Out of stock" });
  await expect(soldOut).toBeDisabled();
  await expect(page.getByRole("button", { name: "Add to cart" })).toHaveCount(0);
});

test("unknown product slugs 404 instead of rendering a broken page", async ({ page }) => {
  const response = await page.goto("/products/ghost");
  expect(response?.status()).toBe(404);
  await expect(page.getByText("That page left the warehouse.")).toBeVisible();
});
