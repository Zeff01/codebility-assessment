import { NextResponse } from "next/server";

export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    quantity: 150,
    imageUrl: "https://placehold.co/600x400?text=Placeholder",
    description: "Noise-cancelling wireless headphones with long battery life.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    quantity: 75,
    imageUrl: "https://placehold.co/600x400?text=Placeholder",
    description:
      "Feature-rich smart watch with fitness tracking and notifications.",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 49.99,
    quantity: 200,
    imageUrl: "https://placehold.co/600x400?text=Placeholder",
    description:
      "Portable Bluetooth speaker with high-quality sound and waterproof design.",
  },
  {
    id: 4,
    name: "4K Ultra HD TV",
    price: 599.99,
    quantity: 30,
    imageUrl: "https://placehold.co/600x400?text=Placeholder",
    description:
      "Stunning 4K Ultra HD resolution with smart features and voice control.",
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: 39.99,
    quantity: 100,
    imageUrl: "https://placehold.co/600x400?text=Placeholder",
    description:
      "Ergonomic gaming mouse with customizable DPI settings and RGB lighting.",
  },
];

export async function GET(request: Request) {
  return NextResponse.json(products);
}
