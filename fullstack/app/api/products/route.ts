import { NextResponse } from 'next/server';
import { getAllProducts, getProductsByCategory } from '@/data/productStore';

// GET /api/products - Get all products (from server memory)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    const products = category
      ? getProductsByCategory(category)
      : getAllProducts();

    return NextResponse.json({
      success: true,
      data: products,
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
