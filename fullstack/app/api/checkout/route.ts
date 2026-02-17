import { NextResponse } from 'next/server';
import { bulkUpdateStock } from '@/data/productStore';

// POST /api/checkout - Process checkout and update stock for multiple products
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items } = body;

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Items array is required',
        },
        { status: 400 }
      );
    }

    // Validate each item has productId and quantity
    for (const item of items) {
      if (!item.productId || typeof item.quantity !== 'number' || item.quantity < 1) {
        return NextResponse.json(
          {
            success: false,
            error: 'Each item must have a valid productId and quantity',
          },
          { status: 400 }
        );
      }
    }

    // Update stock for all items and get updated values
    const updatedStocks = bulkUpdateStock(items);

    return NextResponse.json({
      success: true,
      data: {
        updatedStocks,
      },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process checkout',
      },
      { status: 500 }
    );
  }
}
