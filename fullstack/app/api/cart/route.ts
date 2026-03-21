import { ApiResponse } from '@/lib/types/types';
import { NextRequest, NextResponse } from 'next/server';

interface CartRequest {
  productId: string;
  quantity: number;
}

interface CartResponse {
  message: string;
  quantity?: number;
  productId?: string;
  items?: any[];
}

/**
 * GET /api/cart
 * Retrieves the user's cart.
 */
export async function GET(
  request: NextRequest
): Promise<NextResponse<ApiResponse<CartResponse>>> {
  try {
    // Mock delay
    await new Promise((resolve) => setTimeout(resolve, 200));

    return NextResponse.json(
      {
        data: {
          message: 'Fetched cart successfully',
          items: [], // Mocking an empty cart for now
        },
        status: 200,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Cart API GET error:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch cart',
        status: 500,
      },
      { status: 500 }
    );
  }
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
    const clear = searchParams.get('clear');

    // Mock delay
    await new Promise((resolve) => setTimeout(resolve, 200));

    if (clear === 'true') {
      return NextResponse.json(
        {
          data: {
            message: 'Cleared all items from cart',
          },
          status: 200,
        },
        { status: 200 }
      );
    }

    if (!productId) {
      return NextResponse.json(
        {
          error: 'Missing required field: productId or clear=true',
          status: 400,
        },
        { status: 400 }
      );
    }

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
