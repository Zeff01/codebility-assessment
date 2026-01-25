import { createSlice } from "@reduxjs/toolkit";

export interface IProduct {
  id: number;
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
  description: string;
}

interface initialStateProps {
  products: IProduct[];
}

const initialState: initialStateProps = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    deductQuantity(state, action) {
      const data = action.payload;
      const updatedProducts = state.products.map((product) => {
        if (+product.id === +data.productId) {
          return {
            ...product,
            quantity: +product.quantity - +data.quantity,
          };
        }
        return product;
      });

      state.products = updatedProducts;
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
