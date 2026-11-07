/**
 * Single source of truth for the product catalog.
 *
 * Products are mock data (the brief allows "mock product data or a simple API"),
 * held in one typed module so both server components and route handlers render
 * from the same source. Money is stored as integer cents — never floats — so
 * totals are exact and rounding is a formatting concern, not a math one.
 */

export const CURRENCY = "USD";

export type ProductCategory = "headphones" | "speakers" | "accessories";

export type Product = {
  /** Stable slug, doubles as the URL segment and cart key. */
  id: string;
  name: string;
  tagline: string;
  description: string;
  /** Price in cents. */
  price: number;
  currency: string;
  category: ProductCategory;
  rating: number;
  reviewCount: number;
  /** Units on hand; the cart API clamps quantities against this. */
  stock: number;
  /** Author asset lives in /public/products; see README "Images" note. */
  image: { src: string; alt: string; width: number; height: number };
  highlights: string[];
};

export const PRODUCTS: readonly Product[] = [
  {
    id: "aurora-one",
    name: "Aurora One",
    tagline: "Reference over-ear headphones",
    description:
      "Hybrid ANC over-ears tuned for long listening sessions. Dual drivers, a 60-hour battery, and a plush memory-foam headband that stays comfortable on day-long trips.",
    price: 349_00,
    currency: CURRENCY,
    category: "headphones",
    rating: 4.8,
    reviewCount: 1243,
    stock: 42,
    image: {
      src: "/products/aurora-one.jpg",
      alt: "Aurora One wireless over-ear headphones in matte black with copper accents",
      width: 1200,
      height: 1200,
    },
    highlights: [
      "Hybrid active noise cancellation",
      "60-hour battery, USB-C fast charge",
      "Multipoint Bluetooth 5.4 + 3.5mm wired mode",
    ],
  },
  {
    id: "drift-buds",
    name: "Drift Buds",
    tagline: "Featherweight true-wireless earbuds",
    description:
      "Semi-open earbuds that sit without pressure. Spatial audio with head tracking, IP57 sweat resistance, and a case that tops up three full charges.",
    price: 189_00,
    currency: CURRENCY,
    category: "headphones",
    rating: 4.6,
    reviewCount: 862,
    stock: 0,
    image: {
      src: "/products/drift-buds.jpg",
      alt: "Drift Buds true-wireless earbuds resting on a light stone surface",
      width: 1200,
      height: 1200,
    },
    highlights: [
      "Spatial audio with head tracking",
      "IP57 water and dust resistance",
      "30-hour total battery with case",
    ],
  },
  {
    id: "pulse-mini",
    name: "Pulse Mini",
    tagline: "Portable speaker with real bass",
    description:
      "A pocket speaker with a downward-firing woofer that keeps low end intact at picnic volume. IP68 rated, floats, and pairs two units in stereo.",
    price: 129_00,
    currency: CURRENCY,
    category: "speakers",
    rating: 4.5,
    reviewCount: 397,
    stock: 18,
    image: {
      src: "/products/pulse-mini.jpg",
      alt: "Pulse Mini portable speaker in teal with a woven strap",
      width: 1200,
      height: 1200,
    },
    highlights: [
      "Downward-firing woofer",
      "IP68 — dust-tight and floatable",
      "Stereo pair two units",
    ],
  },
  {
    id: "field-monitor",
    name: "Field Monitor",
    tagline: "High-fidelity desk speaker",
    description:
      "Two-way active monitors with a silk-dome tweeter and room-correction DSP built in. Neutral enough for mixing, warm enough for the rest of the day.",
    price: 429_00,
    currency: CURRENCY,
    category: "speakers",
    rating: 4.9,
    reviewCount: 512,
    stock: 9,
    image: {
      src: "/products/field-monitor.jpg",
      alt: "Field Monitor desk speaker pair in warm walnut enclosure",
      width: 1200,
      height: 1200,
    },
    highlights: [
      "Room-correction DSP",
      "Balanced + RCA + USB-C inputs",
      "Walnut enclosure, acoustic felt front",
    ],
  },
  {
    id: "trail-cable",
    name: "Trail Cable",
    tagline: "240W braided USB-C, 3m",
    description:
      "A three-metre braided USB-C rated for 240W charging, 40Gbps data, and a 35,000-bend lifespan. The cable you buy once and stop thinking about.",
    price: 39_00,
    currency: CURRENCY,
    category: "accessories",
    rating: 4.7,
    reviewCount: 2601,
    stock: 120,
    image: {
      src: "/products/trail-cable.jpg",
      alt: "Trail Cable braided USB-C cable coiled on a desk",
      width: 1200,
      height: 1200,
    },
    highlights: ["240W charging / 40Gbps data", "35,000-bend lifetime", "3-metre braided nylon"],
  },
  {
    id: "carry-case",
    name: "Carry Case",
    tagline: "Hard-shell travel case",
    description:
      "Crushproof hard shell lined with low-profile foam, sized for Aurora One and its accessories. Water-repellent zip and a cable pocket that actually closes.",
    price: 54_00,
    currency: CURRENCY,
    category: "accessories",
    rating: 4.4,
    reviewCount: 188,
    stock: 64,
    image: {
      src: "/products/carry-case.jpg",
      alt: "Carry Case hard-shell storage case in slate grey",
      width: 1200,
      height: 1200,
    },
    highlights: ["Crushproof EVA shell", "Water-repellent YKK zip", "Fits Aurora One + accessories"],
  },
  {
    id: "stage-arm",
    name: "Stage Arm",
    tagline: "Clamp-on monitor desk arm",
    description:
      "Single-arm stand with a gas-piston lift and full swivel, rated for monitors up to 32 inches. Clamps to desks up to 70mm thick, hides your cables.",
    price: 89_00,
    currency: CURRENCY,
    category: "accessories",
    rating: 4.6,
    reviewCount: 734,
    stock: 27,
    image: {
      src: "/products/stage-arm.jpg",
      alt: "Stage Arm single monitor arm mounted on a desk",
      width: 1200,
      height: 1200,
    },
    highlights: ["Gas-piston height assist", "32-inch / 9kg rated", "Integrated cable channel"],
  },
  {
    id: "loop-stand",
    name: "Loop Stand",
    tagline: "Machined aluminium headphone stand",
    description:
      "A solid aluminium loop that keeps your Auroras off the desk leather and away from stray pressure. Padded contact points, weighted base.",
    price: 69_00,
    currency: CURRENCY,
    category: "accessories",
    rating: 4.8,
    reviewCount: 429,
    stock: 33,
    image: {
      src: "/products/loop-stand.jpg",
      alt: "Loop Stand aluminium headphone stand on a studio desk",
      width: 1200,
      height: 1200,
    },
    highlights: ["Machined aluminium", "Weighted anti-tip base", "Padded contact points"],
  },
];

export type SortOption = "featured" | "price-asc" | "price-desc" | "rating";

export function listProducts(options?: { category?: ProductCategory; sort?: SortOption }): Product[] {
  const { category, sort = "featured" } = options ?? {};

  const items: Product[] = category ? PRODUCTS.filter((p) => p.category === category) : [...PRODUCTS];

  switch (sort) {
    case "price-asc":
      items.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      items.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      items.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
      break;
    case "featured":
    default:
      // Keep catalog order for the curated default view.
      break;
  }

  return items;
}

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function isUnknownProduct(id: unknown): id is never {
  return typeof id !== "string" || !PRODUCTS.some((p) => p.id === id);
}

/** `Intl`-based money formatting keeps currency display out of components. */
export function formatPrice(cents: number, currency: string = CURRENCY): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(cents / 100);
}
