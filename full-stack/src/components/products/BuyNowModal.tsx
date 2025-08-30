import { Modal, TextInput, Button, Space } from "@mantine/core";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import ProductItem from "./ProductItem";
import { useForm } from "@mantine/form";
import { productActions } from "@/lib/features/products/productSlice";
import axios from "axios";

interface IBuyNowModal {
  productId: number;
  opened: boolean;
  close: () => void;
  onSuccess: () => void;
}

interface IFormCartValues {
  quantity: number;
}

export default function BuyNowModal({
  productId,
  opened,
  close,
  onSuccess,
}: IBuyNowModal) {
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
    const formData = {
      productId: productId,
      quantity: +values.quantity,
    };

    axios
      .post("/api/products/buy", formData)
      .then(() => {
        close();
        onSuccess();
        dispatch(productActions.deductQuantity(formData));
      })
      .catch((error) => {
        //HERE WILL TRIGGER BACKEND ERROR VALIDATION
        console.error("There something wrong", error);
      });
  };

  return (
    <Modal opened={opened} onClose={close} title="Buy Now">
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
        <TextInput
          label="Total Amount"
          placeholder="Total Amount"
          type="number"
          disabled
        />
        <Space mt={10} />
        <Button variant="fill" fullWidth type="submit">
          Buy
        </Button>
      </form>
    </Modal>
  );
}
