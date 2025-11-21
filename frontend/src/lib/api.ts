import { Product } from './types';

const API_BASE_URL = 'https://fakestoreapi.com';

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    console.error(`API Error: ${res.status} ${res.statusText}`);
    throw new Error('Failed to fetch product data from the API.');
  }

  return res.json();
}

export async function getProductDetail(id: string): Promise<Product> {
  const res = await fetch(`${API_BASE_URL}/products/${id}`);

  if (!res.ok) {
    console.error(`API Error: ${res.status} ${res.statusText}`);
    if (res.status === 404) {
      throw new Error(`Product with ID ${id} not found.`);
    }
    throw new Error(`Failed to fetch product detail for ID: ${id}`);
  }

  return res.json();
}