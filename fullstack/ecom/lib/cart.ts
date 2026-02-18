export type CartItem = {
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  updatedAt: string;
};

export const emptyCart: Cart = {
  items: [],
  updatedAt: new Date(0).toISOString(),
};

export function normalizeCart(input: Cart | null | undefined): Cart {
  if (!input || !Array.isArray(input.items)) {
    return emptyCart;
  }

  const items = input.items
    .filter((item) => item && typeof item.productId === "string")
    .map((item) => ({
      productId: item.productId,
      name: item.name ?? "",
      price: Number(item.price) || 0,
      image: item.image ?? "",
      quantity: Math.max(1, Number(item.quantity) || 1),
    }));

  return {
    items,
    updatedAt: typeof input.updatedAt === "string" ? input.updatedAt : new Date().toISOString(),
  };
}

export function getCartTotals(items: CartItem[]) {
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
  return { itemCount, total };
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(amount);
}

export function readCartCookie(value?: string): Cart {
  if (!value) {
    return emptyCart;
  }

  try {
    const parsed = JSON.parse(value) as Cart;
    return normalizeCart(parsed);
  } catch {
    return emptyCart;
  }
}

export function writeCartCookie(cart: Cart): string {
  return JSON.stringify({
    items: cart.items,
    updatedAt: cart.updatedAt,
  });
}
