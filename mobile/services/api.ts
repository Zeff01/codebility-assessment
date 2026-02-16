export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const BASE_URL = 'https://fakestoreapi.com';

export const fetchProduct = async (id: number = 1): Promise<Product> => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const fetchRandomProduct = async (): Promise<Product> => {
  const randomId = Math.floor(Math.random() * 20) + 1;
  return fetchProduct(randomId);
};
