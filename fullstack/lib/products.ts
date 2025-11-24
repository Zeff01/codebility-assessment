export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  stock: number;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description:
      "High-quality noise-cancelling headphones with 30-hour battery life. Perfect for travel and daily use.",
    price: 299.99,
    image: "/premium-wireless-headphones.png",
    rating: 4.8,
    reviews: 342,
    stock: 15,
    category: "Electronics",
  },
  {
    id: "2",
    name: "Ergonomic Mechanical Keyboard",
    description:
      "Ultra-responsive mechanical keyboard with customizable RGB lighting. Designed for comfort during extended typing sessions.",
    price: 149.99,
    image: "/ergonomic-mechanical-keyboard.jpg",
    rating: 4.6,
    reviews: 218,
    stock: 22,
    category: "Accessories",
  },
  {
    id: "3",
    name: "4K Webcam",
    description:
      "Professional 4K webcam with auto-focus and wide-angle lens. Ideal for streaming and video conferencing.",
    price: 199.99,
    image: "/4k-webcam-professional.jpg",
    rating: 4.7,
    reviews: 156,
    stock: 8,
    category: "Electronics",
  },
  {
    id: "4",
    name: "Laptop Stand",
    description:
      "Adjustable aluminum laptop stand compatible with all laptop sizes. Promotes better posture and ergonomics.",
    price: 79.99,
    image: "/adjustable-aluminum-laptop-stand.jpg",
    rating: 4.5,
    reviews: 189,
    stock: 30,
    category: "Accessories",
  },
  {
    id: "5",
    name: "Portable SSD 1TB",
    description:
      "Lightning-fast portable solid-state drive with 1TB capacity. Compact and durable for on-the-go storage.",
    price: 129.99,
    image: "/portable-ssd-external-storage.jpg",
    rating: 4.9,
    reviews: 421,
    stock: 12,
    category: "Storage",
  },
];
