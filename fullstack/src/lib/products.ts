import { Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Cancelling Headphones",
    description:
      "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and ultra-comfortable memory foam ear cushions. Features Bluetooth 5.3 and multipoint connection for seamless device switching.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "Electronics",
    rating: 4.8,
    stock: 15,
  },
  {
    id: "2",
    name: "Mechanical Keyboard",
    description:
      "Compact 75% mechanical keyboard with hot-swappable switches, RGB backlighting, and a solid aluminum frame. Includes PBT double-shot keycaps and USB-C connectivity.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80",
    category: "Electronics",
    rating: 4.6,
    stock: 23,
  },
  {
    id: "3",
    name: "Ultrawide Monitor 34\"",
    description:
      "34-inch curved ultrawide QHD monitor with 165Hz refresh rate, 1ms response time, and HDR400 support. Perfect for productivity and gaming with USB-C power delivery.",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    category: "Electronics",
    rating: 4.7,
    stock: 8,
  },
  {
    id: "4",
    name: "Ergonomic Office Chair",
    description:
      "Full mesh ergonomic chair with adjustable lumbar support, 4D armrests, and breathable material. Supports up to 300 lbs with a 12-year warranty.",
    price: 389.99,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
    category: "Furniture",
    rating: 4.5,
    stock: 12,
  },
  {
    id: "5",
    name: "Smart Watch Pro",
    description:
      "Advanced smartwatch with AMOLED display, GPS, heart rate monitoring, blood oxygen tracking, and 7-day battery life. Water resistant to 50 meters.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    category: "Electronics",
    rating: 4.4,
    stock: 30,
  },
  {
    id: "6",
    name: "Minimalist Desk Lamp",
    description:
      "LED desk lamp with adjustable color temperature, brightness levels, and a built-in wireless charging pad. Sleek aluminum design with touch controls.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    category: "Home",
    rating: 4.3,
    stock: 45,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
