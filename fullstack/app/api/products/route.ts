import { getProducts } from '@/lib/mock/products';
import { ApiResponse, Product } from '@/lib/types/types';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse<ApiResponse<Product[]>>> {
  try {
    const products = await getProducts();

    const response = NextResponse.json(
      { data: products, status: 200 },
      { status: 200 }
    );

    response.headers.set(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=120'
    );

    return response;
  } catch (error) {
    console.error('Products API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', status: 500 },
      { status: 500 }
    );
  }
}
