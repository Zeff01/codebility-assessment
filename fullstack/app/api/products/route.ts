import { NextResponse } from 'next/server';
import { products } from '@/data/products';

// GET /api/products - Get all products
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    let filteredProducts = products;

    if (category) {
      filteredProducts = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    }

    return NextResponse.json({
      success: true,
      data: filteredProducts,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch products',
      },
      { status: 500 }
    );
  }
}
