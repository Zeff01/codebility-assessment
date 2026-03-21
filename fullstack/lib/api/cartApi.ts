/**
 * Cart API Functions
 *
 * Plain async functions that wrap the fetch calls to /api/cart.
 * These are used as `mutationFn` values in TanStack Query useMutation hooks.
 */

export async function addToCartApi(payload: {
  productId: string;
  quantity: number;
}): Promise<void> {
  const response = await fetch('/api/cart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to add item to cart');
  }
}

export async function removeFromCartApi(productId: string): Promise<void> {
  const response = await fetch(`/api/cart?productId=${productId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to remove item from cart');
  }
}

export async function updateCartQuantityApi(payload: {
  productId: string;
  quantity: number;
}): Promise<void> {
  const response = await fetch('/api/cart', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to update cart quantity');
  }
}

export async function getCartApi(): Promise<any[]> {
  const response = await fetch('/api/cart', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to fetch cart');
  }

  const { data } = await response.json();
  return data.items || [];
}

export async function clearCartApi(): Promise<void> {
  const response = await fetch('/api/cart?clear=true', {
    method: 'DELETE',
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to clear cart');
  }
}
