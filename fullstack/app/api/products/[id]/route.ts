import { NextResponse } from 'next/server';
import { getProductById, updateProductStock } from '@/data/productStore';

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/products/[id] - Get single product (from server memory)
export async function GET(request: Request, { params }: RouteParams) {
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

// PATCH /api/products/[id] - Update product stock (deduct quantity)
export async function PATCH(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { quantity } = body;

    if (typeof quantity !== 'number' || quantity < 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Valid quantity is required',
        },
        { status: 400 }
      );
    }

    const product = updateProductStock(id, quantity);

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
        error: 'Failed to update product stock',
      },
      { status: 500 }
    );
  }
}
