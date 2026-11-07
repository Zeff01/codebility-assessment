export type ProductCollection = "featured" | "new-arrival";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  imageUrl: string;
  category: string;
  stock: number;
  collection: ProductCollection;
};

export type CartLineItem = {
  productId: string;
  name: string;
  price: number;
  currency: string;
  imageUrl: string;
  quantity: number;
  /** Available inventory when the line was added or last updated from catalog. */
  stock: number;
};

export type CartState = {
  items: CartLineItem[];
  itemCount: number;
  subtotal: number;
};
