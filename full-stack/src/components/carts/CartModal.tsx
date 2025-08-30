import { Modal, TextInput, Button, Space } from "@mantine/core";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import ProductItem from "../products/ProductItem";
import { useForm } from "@mantine/form";
import { cartActions } from "@/lib/features/carts/cartSlice";
import axios from "axios";

interface ICartModal {
  productId: number;
  opened: boolean;
  close: () => void;
  onSuccess: () => void;
}

interface IFormCartValues {
  quantity: number;
}
export default function CartModal({
  productId,
  opened,
  close,
  onSuccess,
}: ICartModal) {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) =>
    state.product.products.find((item) => item.id === productId)
  );

  const form = useForm({
    mode: "uncontrolled",
    validate: {
      quantity: (value) => {
        if (!value) {
          return "Quantity is required";
        }
        if (product && +value > product.quantity) {
          return `Maximum value of quantity is ${product.quantity}`;
        }
        if (+value === 0) {
          return "Minimum value is 1";
        }
      },
    },
  });

  const formSubmitHandler = (values: IFormCartValues) => {
    const addToCartData = {
      id: Math.random(),
      productId: productId,
      quantity: +values.quantity,
    };

    axios
      .post("/api/carts", addToCartData)
      .then(() => {
        dispatch(cartActions.addToCart(addToCartData));
        close();
        onSuccess();
      })
      .catch((error) => {
        //HERE WILL TRIGGER BACKEND ERROR VALIDATION
        console.error("There something wrong", error);
      });
  };

  return (
    <Modal opened={opened} onClose={close} title="Add to Cart">
      {product && <ProductItem {...product} withAction={false} />}
      <form className="mt-[20]" onSubmit={form.onSubmit(formSubmitHandler)}>
        <TextInput
          label="Quantity"
          placeholder="Quantity"
          type="number"
          withAsterisk
          key={form.key("quantity")}
          {...form.getInputProps("quantity")}
        />
        <Space mt={10} />
        <Button variant="fill" fullWidth type="submit">
          Add to Cart
        </Button>
      </form>
    </Modal>
  );
}
