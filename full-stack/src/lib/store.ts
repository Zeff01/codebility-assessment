import { configureStore } from "@reduxjs/toolkit";
import productSlice from "@/lib/features/products/productSlice";
import cartSlice from "@/lib/features/carts/cartSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      product: productSlice.reducer,
      cart: cartSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
