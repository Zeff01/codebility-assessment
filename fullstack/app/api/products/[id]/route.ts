import { NextResponse } from 'next/server';
import { getProductById } from '@/data/products';

// GET /api/products/[id] - Get single product
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const product = getProductById(id);

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          error: 'Product not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: product,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch product',
      },
      { status: 500 }
    );
  }
}
