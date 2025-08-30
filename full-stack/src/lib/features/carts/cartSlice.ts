import { createSlice } from "@reduxjs/toolkit";

export interface ICart {
  id: number;
  productId: number;
  quantity: number;
}

interface initialStateProps {
  carts: ICart[];
}

const initialState: initialStateProps = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const data = action.payload;
      state.carts = [...state.carts, data];
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    removeCarts(state, action) {
      const cartIds = action.payload;
      const updatedCarts = state.carts.filter(
        (cart) => !cartIds.includes(cart.id)
      );
      state.carts = updatedCarts;
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    setCarts(state, action) {
      state.carts = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
