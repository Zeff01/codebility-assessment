export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviewCount: number;
  stock: number;
  description: string;
  highlights: string[];
  specs: Record<string, string>;
  images: string[];
  featured: boolean;
};

const products: Product[] = [
  {
    id: "aurora-glass-lamp",
    name: "Aurora Glass Lamp",
    category: "Lighting",
    price: 189,
    compareAt: 219,
    rating: 4.7,
    reviewCount: 112,
    stock: 8,
    description:
      "A hand-blown glass lamp with a warm, diffused glow and a brushed brass base.",
    highlights: [
      "Dimmable warm LED bulb included",
      "Hand-blown glass shade",
      "Brushed brass base with felt pads",
      "240V and 110V compatible",
    ],
    specs: {
      Height: "14 in",
      "Shade Diameter": "9 in",
      Material: "Glass, brass",
      Weight: "4.2 lb",
    },
    images: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519710887377-5a11d0f5c4bb?q=80&w=1600&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: "civic-wood-chair",
    name: "Civic Wood Chair",
    category: "Seating",
    price: 249,
    rating: 4.6,
    reviewCount: 86,
    stock: 14,
    description:
      "A sculpted oak chair with a woven seat, designed for long, comfortable dinners.",
    highlights: [
      "Solid oak frame",
      "Handwoven paper cord seat",
      "Matte natural finish",
      "Supports up to 265 lb",
    ],
    specs: {
      Height: "32 in",
      "Seat Height": "18 in",
      Material: "Oak, paper cord",
      Weight: "12.1 lb",
    },
    images: [
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: "marin-throw-blanket",
    name: "Marin Throw Blanket",
    category: "Textiles",
    price: 78,
    compareAt: 92,
    rating: 4.8,
    reviewCount: 214,
    stock: 32,
    description:
      "A soft, textured throw with a breathable weave and subtle coastal palette.",
    highlights: [
      "100 percent cotton",
      "Machine washable",
      "Woven fringe edges",
      "Lightweight for all seasons",
    ],
    specs: {
      Size: "50 in x 70 in",
      Material: "Cotton",
      Weight: "2.3 lb",
      Care: "Machine wash cold",
    },
    images: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1400&auto=format&fit=crop",
    ],
    featured: false,
  },
  {
    id: "atlas-stoneware-set",
    name: "Atlas Stoneware Set",
    category: "Kitchen",
    price: 128,
    rating: 4.5,
    reviewCount: 61,
    stock: 20,
    description:
      "A six-piece stoneware set with a matte glaze and durable, everyday finish.",
    highlights: [
      "Dishwasher safe",
      "Oven safe up to 375F",
      "Scratch resistant glaze",
      "Set of six",
    ],
    specs: {
      Pieces: "6",
      Material: "Stoneware",
      Finish: "Matte glaze",
      Weight: "9.4 lb",
    },
    images: [
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=1200&auto=format&fit=crop",
    ],
    featured: false,
  },
  {
    id: "northwind-coffee-grinder",
    name: "Northwind Coffee Grinder",
    category: "Kitchen",
    price: 159,
    rating: 4.4,
    reviewCount: 39,
    stock: 10,
    description:
      "A compact, low-noise burr grinder with 40 grind settings and a sleek profile.",
    highlights: [
      "40 precision grind settings",
      "Low-noise motor",
      "One-touch timer",
      "Removable hopper",
    ],
    specs: {
      Capacity: "10 oz",
      Power: "150W",
      Material: "Aluminum, ABS",
      Weight: "6.1 lb",
    },
    images: [
      "https://images.unsplash.com/photo-1507915135761-41a0a222c709?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507915135761-41a0a222c709?q=80&w=1200&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: "horizon-wall-clock",
    name: "Horizon Wall Clock",
    category: "Decor",
    price: 94,
    rating: 4.3,
    reviewCount: 52,
    stock: 25,
    description:
      "A minimalist wall clock with a quiet sweep movement and brushed steel rim.",
    highlights: [
      "Silent sweep movement",
      "Brushed steel rim",
      "Easy wall mount",
      "AA battery included",
    ],
    specs: {
      Diameter: "12 in",
      Depth: "1.8 in",
      Material: "Steel, glass",
      Weight: "2.1 lb",
    },
    images: [
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop",
    ],
    featured: false,
  },
];

export function getProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
