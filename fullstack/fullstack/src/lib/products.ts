import { DEFAULT_PRODUCT_IMAGE } from "@/lib/product-images";
import { cache } from "react";
import type { CartLineItem, Product, ProductCollection } from "@/types/product";

const PRODUCT_IMAGE_BY_ID: Record<string, string> = {
  "aurora-headphones":
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=960&h=960&fit=crop&q=80",
  "summit-backpack":
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=960&h=960&fit=crop&q=80",
  "lumen-desk-lamp":
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=960&h=960&fit=crop&q=80",
  "atlas-running-shoes":
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=960&h=960&fit=crop&q=80",
  "nova-smart-watch":
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=960&h=960&fit=crop&q=80",
  "harbor-ceramic-mug":
    "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=960&h=960&fit=crop&q=80",
};

function productImageUrl(id: string): string {
  return PRODUCT_IMAGE_BY_ID[id] ?? DEFAULT_PRODUCT_IMAGE;
}

const PRODUCTS: Product[] = [
  {
    id: "aurora-headphones",
    name: "Aurora Wireless Headphones",
    description:
      "Our bestseller for focus and travel: adaptive noise cancellation, multipoint Bluetooth, and fold-flat carry comfort.",
    price: 189.99,
    currency: "USD",
    imageUrl: productImageUrl("aurora-headphones"),
    category: "Audio",
    stock: 24,
    collection: "featured",
  },
  {
    id: "summit-backpack",
    name: "Summit Travel Backpack",
    description:
      "Built for daily commutes and weekend trips with a ventilated back panel, 16-inch laptop cradle, and water-resistant zips.",
    price: 129.5,
    currency: "USD",
    imageUrl: productImageUrl("summit-backpack"),
    category: "Travel",
    stock: 18,
    collection: "featured",
  },
  {
    id: "lumen-desk-lamp",
    name: "Lumen LED Desk Lamp",
    description:
      "Brighten late-night work sessions with stepless dimming, warm-to-cool presets, and a built-in USB-C port for your devices.",
    price: 79.0,
    currency: "USD",
    imageUrl: productImageUrl("lumen-desk-lamp"),
    category: "Home Office",
    stock: 42,
    collection: "featured",
  },
  {
    id: "atlas-running-shoes",
    name: "Atlas Lightweight Runners",
    description:
      "Just dropped: responsive foam cushioning and breathable mesh for road miles, with reflective accents for dawn runs.",
    price: 114.0,
    currency: "USD",
    imageUrl: productImageUrl("atlas-running-shoes"),
    category: "Footwear",
    stock: 32,
    collection: "new-arrival",
  },
  {
    id: "nova-smart-watch",
    name: "Nova Smart Watch",
    description:
      "New arrival with heart-rate tracking, sleep insights, and seven-day battery in a slim aluminum case.",
    price: 249.0,
    currency: "USD",
    imageUrl: productImageUrl("nova-smart-watch"),
    category: "Wearables",
    stock: 15,
    collection: "new-arrival",
  },
  {
    id: "harbor-ceramic-mug",
    name: "Harbor Ceramic Mug Set",
    description:
      "Fresh in store: a two-piece matte glaze set that keeps coffee hot, stacks neatly, and is dishwasher safe.",
    price: 34.99,
    currency: "USD",
    imageUrl: productImageUrl("harbor-ceramic-mug"),
    category: "Home",
    stock: 50,
    collection: "new-arrival",
  },
];

function getByCollection(collection: ProductCollection): Product[] {
  return PRODUCTS.filter((product) => product.collection === collection);
}

export const getProducts = cache(async (): Promise<Product[]> => {
  return PRODUCTS;
});

export const getFeaturedProducts = cache(async (): Promise<Product[]> => {
  return getByCollection("featured");
});

export const getNewArrivalProducts = cache(async (): Promise<Product[]> => {
  return getByCollection("new-arrival");
});

export const getProductById = cache(
  async (id: string): Promise<Product | undefined> => {
    return PRODUCTS.find((product) => product.id === id);
  },
);

export function toCartLineItem(
  product: Product,
  quantity: number,
): CartLineItem {
  return {
    productId: product.id,
    name: product.name,
    price: product.price,
    currency: product.currency,
    imageUrl: product.imageUrl,
    quantity,
    stock: product.stock,
  };
}
