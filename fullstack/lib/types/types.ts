// Core domain types -> I prefer this to be separated but since this is just a small project lets make it in  in one file for now
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product?: Product;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}