import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Product } from '@/types';

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  isCheckingOut: boolean;
}

// Async thunk for checkout
export const checkoutCart = createAsyncThunk<
  Record<string, number>, // Return type: updated stocks
  void, // Argument type
  { state: { cart: CartState } }
>('cart/checkout', async (_, { getState }) => {
  const { items } = getState().cart;

  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      items: items.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
      })),
    }),
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.error || 'Checkout failed');
  }

  return data.data.updatedStocks;
});

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  isOpen: false,
  isCheckingOut: false,
};

// Helper to calculate totals
function calculateTotals(items: CartItem[]) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  return {
    totalItems,
    totalPrice: Math.round(totalPrice * 100) / 100,
  };
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: Product; quantity?: number }>
    ) => {
      const { product, quantity = 1 } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity += quantity;
      } else {
        state.items.push({ product, quantity });
      }

      const totals = calculateTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalPrice = totals.totalPrice;
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );

      const totals = calculateTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalPrice = totals.totalPrice;
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;

      if (quantity <= 0) {
        state.items = state.items.filter(
          (item) => item.product.id !== productId
        );
      } else {
        const itemIndex = state.items.findIndex(
          (item) => item.product.id === productId
        );
        if (itemIndex >= 0) {
          state.items[itemIndex].quantity = quantity;
        }
      }

      const totals = calculateTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalPrice = totals.totalPrice;
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },

    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },

    openCart: (state) => {
      state.isOpen = true;
    },

    closeCart: (state) => {
      state.isOpen = false;
    },

    // For hydrating from localStorage
    setCart: (state, action: PayloadAction<CartState>) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkoutCart.pending, (state) => {
        state.isCheckingOut = true;
      })
      .addCase(checkoutCart.fulfilled, (state) => {
        state.items = [];
        state.totalItems = 0;
        state.totalPrice = 0;
        state.isOpen = false;
        state.isCheckingOut = false;
      })
      .addCase(checkoutCart.rejected, (state) => {
        state.isCheckingOut = false;
      });
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart,
  openCart,
  closeCart,
  setCart,
} = cartSlice.actions;

export default cartSlice.reducer;
