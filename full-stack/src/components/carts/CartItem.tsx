import ProductItem from "../products/ProductItem";
import type { IProduct } from "@/lib/features/products/productSlice";
import type { ICart } from "@/lib/features/carts/cartSlice";
import { Button } from "@mantine/core";
import { useState } from "react";
import { cartActions } from "@/lib/features/carts/cartSlice";
import { useAppDispatch } from "@/lib/hooks";
import axios from "axios";
export interface ICheckoutItem {
  id: number;
  quantity: number;
  price: number;
  productId: number;
  add: 1 | 0;
}

export interface ICartProduct extends ICart {
  product: IProduct;
  onSelect: ({ id, quantity, price, productId, add }: ICheckoutItem) => void;
}

export default function CartItem({
  product,
  id,
  quantity,
  onSelect,
}: ICartProduct) {
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState<boolean>(false);

  const selectHandler = () => {
    const isSelected = !selected;
    setSelected(isSelected);
    onSelect({
      id: id,
      quantity: quantity,
      price: product.price,
      productId: product.id,
      add: isSelected ? 1 : 0,
    });
  };

  const cartDeleteHandler = () => {
    axios
      .delete(`/api/carts/${id}`)
      .then(() => {
        dispatch(cartActions.removeCarts([id]));
      })
      .catch((error) => {
        //HERE WILL TRIGGER BACKEND ERROR VALIDATION
        console.error("There something wrong", error);
      });
  };

  return (
    <ProductItem
      {...product}
      withDelete
      onDelete={cartDeleteHandler}
      isCarted={true}
      CustomComponent={
        <>
          <Button
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            onClick={selectHandler}
            variant="fill"
            disabled={+product.quantity < +quantity}
          >
            {!selected ? "SELECT" : "UNSELECT"}
          </Button>
        </>
      }
    />
  );
}
