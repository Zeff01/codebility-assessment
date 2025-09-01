export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  quantity?: number;
  image: string;
}
export interface CartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}
