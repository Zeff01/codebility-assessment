import { NextResponse } from 'next/server';
import { getProductById } from '@/data/products';
import { CartItem } from '@/types';

// In-memory cart storage (in production, use database or session)
// For this demo, we use server-side storage that persists during server runtime
const cartStorage = new Map<string, CartItem[]>();

function getSessionId(request: Request): string {
  // In production, use proper session management
  // For demo purposes, we use a simple cookie-based approach
  const cookieHeader = request.headers.get('cookie') || '';
  const sessionMatch = cookieHeader.match(/session_id=([^;]+)/);
  return sessionMatch ? sessionMatch[1] : 'default-session';
}

// GET /api/cart - Get cart contents
export async function GET(request: Request) {
  try {
    const sessionId = getSessionId(request);
    const items = cartStorage.get(sessionId) || [];

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    return NextResponse.json({
      success: true,
      data: {
        items,
        totalItems,
        totalPrice: Math.round(totalPrice * 100) / 100,
      },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch cart',
      },
      { status: 500 }
    );
  }
}

// POST /api/cart - Add item to cart
export async function POST(request: Request) {
  try {
    const sessionId = getSessionId(request);
    const body = await request.json();
    const { productId, quantity = 1 } = body;

    if (!productId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Product ID is required',
        },
        { status: 400 }
      );
    }

    const product = getProductById(productId);
    if (!product) {
      return NextResponse.json(
        {
          success: false,
          error: 'Product not found',
        },
        { status: 404 }
      );
    }

    const items = cartStorage.get(sessionId) || [];
    const existingItemIndex = items.findIndex(
      (item) => item.product.id === productId
    );

    if (existingItemIndex >= 0) {
      items[existingItemIndex].quantity += quantity;
    } else {
      items.push({ product, quantity });
    }

    cartStorage.set(sessionId, items);

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    return NextResponse.json({
      success: true,
      data: {
        items,
        totalItems,
        totalPrice: Math.round(totalPrice * 100) / 100,
      },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to add item to cart',
      },
      { status: 500 }
    );
  }
}

// PUT /api/cart - Update item quantity
export async function PUT(request: Request) {
  try {
    const sessionId = getSessionId(request);
    const body = await request.json();
    const { productId, quantity } = body;

    if (!productId || quantity === undefined) {
      return NextResponse.json(
        {
          success: false,
          error: 'Product ID and quantity are required',
        },
        { status: 400 }
      );
    }

    const items = cartStorage.get(sessionId) || [];
    const existingItemIndex = items.findIndex(
      (item) => item.product.id === productId
    );

    if (existingItemIndex < 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Item not found in cart',
        },
        { status: 404 }
      );
    }

    if (quantity <= 0) {
      items.splice(existingItemIndex, 1);
    } else {
      items[existingItemIndex].quantity = quantity;
    }

    cartStorage.set(sessionId, items);

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    return NextResponse.json({
      success: true,
      data: {
        items,
        totalItems,
        totalPrice: Math.round(totalPrice * 100) / 100,
      },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update cart',
      },
      { status: 500 }
    );
  }
}

// DELETE /api/cart - Remove item or clear cart
export async function DELETE(request: Request) {
  try {
    const sessionId = getSessionId(request);
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('productId');

    if (productId) {
      // Remove specific item
      const items = cartStorage.get(sessionId) || [];
      const filteredItems = items.filter(
        (item) => item.product.id !== productId
      );
      cartStorage.set(sessionId, filteredItems);

      const totalItems = filteredItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      const totalPrice = filteredItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );

      return NextResponse.json({
        success: true,
        data: {
          items: filteredItems,
          totalItems,
          totalPrice: Math.round(totalPrice * 100) / 100,
        },
      });
    } else {
      // Clear entire cart
      cartStorage.delete(sessionId);

      return NextResponse.json({
        success: true,
        data: {
          items: [],
          totalItems: 0,
          totalPrice: 0,
        },
      });
    }
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to remove item from cart',
      },
      { status: 500 }
    );
  }
}
