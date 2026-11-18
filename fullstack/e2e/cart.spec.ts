import { expect, test } from "@playwright/test";
import { addToCart, cartButton, cartItems, products } from "./fixtures";

test.describe("cart", () => {
  test("adding a product updates the header summary", async ({ page }) => {
    await addToCart(page, products.headphones.slug, 2);

    await expect(cartButton(page)).toHaveAccessibleName(cartItems(2));
  });

  test("cart survives a reload", async ({ page }) => {
    await addToCart(page, products.sleeve.slug);

    await page.reload();

    await expect(cartButton(page)).toHaveAccessibleName(cartItems(1));
  });

  test("shows line items and totals on the cart page", async ({ page }) => {
    await addToCart(page, products.headphones.slug);
    await addToCart(page, products.sleeve.slug);

    await cartButton(page).click();
    await expect(page).toHaveURL("/cart");

    const summary = page.getByRole("region", { name: "Order summary" });
    await expect(summary.getByText("Subtotal (2 items)")).toBeVisible();
    await expect(summary.getByText("$308.00").first()).toBeVisible();
    await expect(summary.getByText("Free", { exact: true })).toBeVisible();
  });

  test("updates quantity and removes items", async ({ page }) => {
    await addToCart(page, products.sleeve.slug);
    await page.goto("/cart");

    const summary = page.getByRole("region", { name: "Order summary" });

    await page.getByRole("button", { name: "Increase quantity" }).click();
    await expect(summary.getByText("Subtotal (2 items)")).toBeVisible();
    await expect(summary.getByText("$118.00").first()).toBeVisible();

    await page.reload();
    await expect(page.getByText("Subtotal (2 items)")).toBeVisible();

    await page.getByRole("button", { name: "Remove" }).click();
    await expect(page.getByText("Your cart is empty")).toBeVisible();
    await expect(cartButton(page)).toHaveAccessibleName(cartItems(0));
  });

  test("caps quantity at available stock", async ({ page }) => {
    await addToCart(page, products.speaker.slug, products.speaker.stock);

    await expect(page.getByRole("button", { name: "Add to cart" })).toBeDisabled();
    await expect(page.getByText("You already have the maximum quantity in your cart.")).toBeVisible();
  });

  test("shows an empty state", async ({ page }) => {
    await page.goto("/cart");

    await expect(page.getByText("Your cart is empty")).toBeVisible();
    await page.getByRole("link", { name: "Continue shopping" }).click();
    await expect(page).toHaveURL("/");
  });
});
