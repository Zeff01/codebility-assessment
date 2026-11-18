import { expect, type Page } from "@playwright/test";

export const products = {
  headphones: { slug: "aurora-wireless-headphones", name: "Aurora Wireless Headphones", price: 249 },
  sleeve: { slug: "canvas-laptop-sleeve", name: "Canvas Laptop Sleeve", price: 59 },
  speaker: { slug: "halo-smart-speaker", name: "Halo Smart Speaker", stock: 5 },
  soldOut: { slug: "stride-fitness-band", name: "Stride Fitness Band" },
};

export const cartButton = (page: Page) => page.getByRole("link", { name: /^Cart:/ });

export const cartItems = (count: number) => new RegExp(`^Cart:\\s*${count}\\s*items?\\b`);

export async function addToCart(page: Page, slug: string, quantity = 1) {
  await page.goto(`/products/${slug}`);
  await expect(cartButton(page)).toHaveAccessibleName(/^Cart:\s*\d+\s*items?\b/);

  for (let i = 1; i < quantity; i++) {
    await page.getByRole("button", { name: "Increase quantity" }).click();
  }

  await page.getByRole("button", { name: "Add to cart" }).click();
  await expect(page.getByText("Added to cart.")).toBeVisible();
}
