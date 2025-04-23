import type { Product } from "@/features/product/types/product";

export type GetProductDataArgs = {
	id: number;
};

export type GetProductDataResponse = Product | null;

export async function getProduct({ id }: GetProductDataArgs): Promise<GetProductDataResponse> {
	//await simulateDelay(2000);
  
	const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product (${response.status})`);
  }
  
  let data: unknown;
  try {
    data = await response.json();
    console.log(data);
    
    // Check if the response is an empty object
    if (data && typeof data === 'object' && Object.keys(data).length === 0) {
      return null;
    }
    
    return data as Product;
  } catch {
    return null;
  }
}
