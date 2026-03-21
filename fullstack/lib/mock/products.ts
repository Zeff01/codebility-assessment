// lib/mock.ts

import { Product } from "../types/types";

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description:
      'High-quality wireless headphones with active noise cancellation. Perfect for music lovers and professionals.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    category: 'Electronics',
    inStock: true,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    description:
      'Advanced fitness tracking with heart rate monitoring, sleep analysis, and 7-day battery life.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    category: 'Electronics',
    inStock: true,
    rating: 4.3,
    reviews: 89,
  },
  {
    id: '3',
    name: 'Portable Charger',
    description: 'Fast-charging 25000mAh power bank with dual USB ports. Keep your devices charged on the go.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80',
    category: 'Accessories',
    inStock: true,
    rating: 4.7,
    reviews: 342,
  },
  {
    id: '4',
    name: 'USB-C Cable Pack',
    description: '3-pack of durable USB-C cables with fast charging support. Lifetime warranty included.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80',
    category: 'Accessories',
    inStock: false,
    rating: 4.6,
    reviews: 205,
  },
];

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return products.find((p) => p.id === id);
}
