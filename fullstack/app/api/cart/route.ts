import { ApiResponse } from '@/lib/types/types';
import { NextRequest, NextResponse } from 'next/server';

interface CartRequest {
  productId: string;
  quantity: number;
}

interface CartResponse {
  message: string;
  quantity?: number;
  productId: string;
}

/**
 * POST /api/cart
 * Adds an item to the cart.
 */
export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse<CartResponse>>> {
  try {
    const body = await request.json() as CartRequest;

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
    console.error('Cart API POST error:', error);
    
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

/**
 * PATCH /api/cart
 * Updates the quantity of a product in the cart.
 */
export async function PATCH(
  request: NextRequest
): Promise<NextResponse<ApiResponse<CartResponse>>> {
  try {
    const body = await request.json() as CartRequest;

    if (!body.productId || body.quantity === undefined) {
      return NextResponse.json(
        {
          error: 'Missing required fields: productId, quantity',
          status: 400,
        },
        { status: 400 }
      );
    }

    if (!Number.isInteger(body.quantity) || body.quantity < 0) {
      return NextResponse.json(
        {
          error: 'Quantity must be a non-negative integer',
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

    // Mock delay
    await new Promise((resolve) => setTimeout(resolve, 200));

    // If quantity is 0, it's essentially a removal, but we'll follow the requested PATCH logic
    return NextResponse.json(
      {
        data: {
          message: `Updated product ${body.productId} quantity to ${body.quantity}`,
          quantity: body.quantity,
          productId: body.productId,
        },
        status: 200,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Cart API PATCH error:', error);
    
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
        error: 'Failed to update item in cart',
        status: 500,
      },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/cart
 * Removes a product from the cart.
 */
export async function DELETE(
  request: NextRequest
): Promise<NextResponse<ApiResponse<CartResponse>>> {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('productId');

    if (!productId) {
      return NextResponse.json(
        {
          error: 'Missing required field: productId',
          status: 400,
        },
        { status: 400 }
      );
    }

    // Mock delay
    await new Promise((resolve) => setTimeout(resolve, 200));

    return NextResponse.json(
      {
        data: {
          message: `Removed product ${productId} from cart`,
          productId: productId,
        },
        status: 200,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Cart API DELETE error:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to remove item from cart',
        status: 500,
      },
      { status: 500 }
    );
  }
}
