import { Product } from '@/types';
import { products as initialProducts } from './products';

// In-memory product storage (in production, use database)
// This persists during server runtime and allows stock updates
let productsStore: Product[] = [...initialProducts];

export function getAllProducts(): Product[] {
  return productsStore;
}

export function getProductById(id: string): Product | undefined {
  return productsStore.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return productsStore.filter((product) => product.category === category);
}

export function updateProductStock(productId: string, quantity: number): Product | null {
  const product = productsStore.find((p) => p.id === productId);
  if (product) {
    product.stock = Math.max(0, product.stock - quantity);
    return product;
  }
  return null;
}

export function bulkUpdateStock(
  items: { productId: string; quantity: number }[]
): Record<string, number> {
  const updatedStocks: Record<string, number> = {};

  for (const { productId, quantity } of items) {
    const product = productsStore.find((p) => p.id === productId);
    if (product) {
      product.stock = Math.max(0, product.stock - quantity);
      updatedStocks[productId] = product.stock;
    }
  }

  return updatedStocks;
}

export function resetProducts(): void {
  productsStore = [...initialProducts];
}
