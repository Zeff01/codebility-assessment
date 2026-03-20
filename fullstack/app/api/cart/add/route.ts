import { ApiResponse } from '@/lib/types/types';
import { NextRequest, NextResponse } from 'next/server';

interface AddToCartRequest {
  productId: string;
  quantity: number;
}

interface AddToCartResponse {
  message: string;
  quantity: number;
  productId: string;
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse<AddToCartResponse>>> {
  try {
    const body = await request.json() as AddToCartRequest;

    if (!body.productId || body.quantity === undefined) {
      return NextResponse.json(
        {
          error: 'Missing required fields: productId, quantity',
          status: 400,
        },
        { status: 400 }
      );
    }

    if (!Number.isInteger(body.quantity) || body.quantity < 1) {
      return NextResponse.json(
        {
          error: 'Quantity must be a positive integer',
          status: 400,
        },
        { status: 400 }
      );
    }

    if (typeof body.productId !== 'string') {
      return NextResponse.json(
        {
          error: 'Product ID must be a string',
          status: 400,
        },
        { status: 400 }
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 200));

    return NextResponse.json(
      {
        data: {
          message: `Added ${body.quantity} item(s) to cart`,
          quantity: body.quantity,
          productId: body.productId,
        },
        status: 200,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Cart API error:', error);
    
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          error: 'Invalid JSON in request body',
          status: 400,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error: 'Failed to add item to cart',
        status: 500,
      },
      { status: 500 }
    );
  }
}