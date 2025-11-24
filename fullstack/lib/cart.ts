export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

const CART_KEY = "cart";

export function getCart(): Cart {
  if (typeof window === "undefined") return { items: [], total: 0 };

  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : { items: [], total: 0 };
}

export function saveCart(cart: Cart): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(product: {
  id: string;
  name: string;
  price: number;
  image: string;
}): Cart {
  const cart = getCart();
  const existingItem = cart.items.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.items.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  }

  cart.total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  saveCart(cart);
  return cart;
}

export function addToCartWithQuantity(
  product: { id: string; name: string; price: number; image: string },
  quantity: number
): Cart {
  const cart = getCart();
  const existingItem = cart.items.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    });
  }

  cart.total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  saveCart(cart);
  return cart;
}

export function removeFromCart(productId: string): Cart {
  const cart = getCart();
  cart.items = cart.items.filter((item) => item.id !== productId);
  cart.total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  saveCart(cart);
  return cart;
}

export function updateCartQuantity(productId: string, quantity: number): Cart {
  const cart = getCart();
  const item = cart.items.find((i) => i.id === productId);

  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId);
    }
    item.quantity = quantity;
  }

  cart.total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  saveCart(cart);
  return cart;
}
