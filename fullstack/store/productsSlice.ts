import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types';
import { products as initialProducts } from '@/data/products';
import { checkoutCart } from './cartSlice';

interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: initialProducts,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Update stock values from server response (productId -> newStock)
    updateStocks: (
      state,
      action: PayloadAction<Record<string, number>>
    ) => {
      const updatedStocks = action.payload;
      for (const product of state.items) {
        if (updatedStocks[product.id] !== undefined) {
          product.stock = updatedStocks[product.id];
        }
      }
    },

    // For hydrating from localStorage
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkoutCart.fulfilled, (state, action) => {
      const updatedStocks = action.payload;
      for (const product of state.items) {
        if (updatedStocks[product.id] !== undefined) {
          product.stock = updatedStocks[product.id];
        }
      }
    });
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
