export type ProductCategory = "audio" | "wearables" | "accessories" | "home";

export type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  stock: number;
  rating: number;
  reviewCount: number;
  images: ProductImage[];
  features: string[];
};

export type ProductSummary = Pick<
  Product,
  "id" | "slug" | "name" | "brand" | "price" | "compareAtPrice" | "rating" | "stock"
> & { image: ProductImage };

export type ProductQuery = {
  category?: ProductCategory;
  limit?: number;
};
