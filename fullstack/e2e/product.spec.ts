import { expect, test } from "@playwright/test";
import { products } from "./fixtures";

test.describe("product listing", () => {
  test("lists products and links to the detail page", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "All products" })).toBeVisible();
    await expect(page.getByRole("listitem")).toHaveCount(8);

    await page.getByRole("link", { name: new RegExp(products.headphones.name) }).click();

    await expect(page).toHaveURL(`/products/${products.headphones.slug}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(products.headphones.name);
  });
});

test.describe("product detail", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/products/${products.headphones.slug}`);
  });

  test("renders product info and metadata", async ({ page }) => {
    await expect(page).toHaveTitle(`${products.headphones.name} | Northwave Store`);
    const main = page.getByRole("main");
    await expect(main.getByText("$249.00", { exact: true })).toBeVisible();
    await expect(main.getByText("In stock")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Highlights" })).toBeVisible();
  });

  test("switches the main image from the thumbnails", async ({ page }) => {
    const thumbnails = page.getByRole("tab");
    await expect(thumbnails.first()).toHaveAttribute("aria-selected", "true");

    await page.getByRole("tab", { name: "Show image 3" }).click();

    await expect(thumbnails.nth(2)).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("img", { name: "Aurora headphones ear cushion detail" })).toBeVisible();
  });

  test("serves optimized images", async ({ page }) => {
    const main = page.getByRole("img", { name: "Aurora headphones front view" });
    await expect(main).toHaveAttribute("src", /\/_next\/image\?url=/);
    await expect(main).toHaveJSProperty("complete", true);
  });

  test("streams related products", async ({ page }) => {
    const related = page.getByRole("region", { name: "You may also like" });
    await expect(related.getByRole("listitem")).toHaveCount(4);
  });

  test("disables add to cart for sold out products", async ({ page }) => {
    await page.goto(`/products/${products.soldOut.slug}`);
    await expect(page.getByRole("button", { name: "Out of stock" })).toBeDisabled();
  });
});

test("shows the not found page for unknown products", async ({ page }) => {
  await page.goto("/products/does-not-exist");

  await expect(page.getByRole("heading", { name: "Product not found" })).toBeVisible();
  await page.getByRole("link", { name: "Back to all products" }).click();
  await expect(page).toHaveURL("/");
});
