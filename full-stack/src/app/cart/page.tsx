"use client";

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  Button,
  Center,
  Divider,
  Grid,
  Group,
  Text,
  Title,
  Alert,
} from "@mantine/core";
import type { ICartProduct } from "@/components/carts/CartItem";
import CartItem from "@/components/carts/CartItem";
import type { ICheckoutItem } from "@/components/carts/CartItem";
import { useState, useEffect } from "react";
import { IconCheck, IconShoppingCart, IconX } from "@tabler/icons-react";
import { cartActions } from "@/lib/features/carts/cartSlice";
import { productActions } from "@/lib/features/products/productSlice";

export default function Cart() {
  const dispatch = useAppDispatch();
  const [confirming, setConfirming] = useState<boolean>(false);
  const [successCheckout, setSuccessCheckout] = useState<boolean>(false);
  const [checkoutItems, setCheckoutItems] = useState<ICheckoutItem[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const carts = useAppSelector((state) => state.cart.carts);

  const products = useAppSelector((state) => state.product.products);

  useEffect(() => {
    const productStore = localStorage.getItem("products");

    if (!!productStore) {
      const products = JSON.parse(productStore);
      dispatch(productActions.setProducts(products));
    }

    const cartStore = localStorage.getItem("carts");

    if (!!cartStore) {
      const carts = JSON.parse(cartStore);
      dispatch(cartActions.setCarts(carts));
    }
  }, []);

  useEffect(() => {
    const total = checkoutItems.reduce((accumulator, item) => {
      return accumulator + item.quantity * item.price;
    }, 0);
    setTotalAmount(total);
  }, [checkoutItems]);

  useEffect(() => {
    const isShownTimeout = setTimeout(() => {
      if (successCheckout) {
        const checkoutIds = checkoutItems.map(
          (checkoutItem) => checkoutItem.id
        );
        dispatch(cartActions.removeCarts(checkoutIds));
        setCheckoutItems([]);
        setTotalAmount(0);
        setSuccessCheckout(false);
      }
    }, 4000);

    return () => {
      clearTimeout(isShownTimeout);
    };
  }, [successCheckout]);

  if (carts.length === 0) {
    return (
      <div className="h-full">
        <Center>No added to cart</Center>
      </div>
    );
  }

  const onSelectCartItem = ({ add, ...selected }: ICheckoutItem) => {
    console.log(add, selected);
    if (add === 0) {
      const newCheckoutItems = checkoutItems.filter(
        (item) => item.id !== selected.id
      );
      setCheckoutItems(newCheckoutItems);
    } else {
      setCheckoutItems((prevCheckoutItems) => [
        ...prevCheckoutItems,
        { ...selected, add: 1 },
      ]);
    }
  };

  const checkoutHandler = () => {
    for (const checkoutItem of checkoutItems) {
      dispatch(
        productActions.deductQuantity({
          productId: checkoutItem.productId,
          quantity: checkoutItem.quantity,
        })
      );
    }
    setSuccessCheckout(true);
  };

  const mappedCart: ICartProduct[] = carts.map((cart) => {
    const product = products.find((item) => item.id === cart.productId)!;
    return {
      ...cart,
      product: { ...product, cartedQuantity: cart.quantity },
      onSelect: onSelectCartItem,
    };
  });

  const cartProducts: ICartProduct[] = mappedCart;

  return (
    <>
      <Title fz={32} fw={700} mb="md">
        Cart Items
      </Title>

      {successCheckout && (
        <Alert
          variant="light"
          color="green"
          title="Success"
          icon={<IconCheck />}
          mb={10}
        >
          Items has been checkout
        </Alert>
      )}
      <Grid>
        {cartProducts &&
          cartProducts.map((cartProduct) => (
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={cartProduct.id}>
              <CartItem {...cartProduct} />
            </Grid.Col>
          ))}
      </Grid>
      {totalAmount > 0 && (
        <>
          <Divider mt="lg" />
          <Grid>
            <Grid.Col span={9}>
              <Group
                style={{
                  flex: 1,
                  alignItems: "center",
                  height: 60,
                }}
              >
                <Text fz={20}>
                  Total :{" "}
                  <span style={{ fontWeight: "bold" }}>{totalAmount}</span>
                </Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={3}>
              {!confirming && (
                <Button
                  mt="md"
                  onClick={() => setConfirming(true)}
                  fullWidth
                  leftSection={<IconShoppingCart />}
                >
                  Checkout
                </Button>
              )}
              {confirming && (
                <>
                  <Center mt={5}>
                    <Text fz={20}>Do you want to continue?</Text>
                  </Center>
                  <Grid>
                    <Grid.Col span={6}>
                      <Button
                        mt="md"
                        color="green"
                        fullWidth
                        leftSection={<IconCheck />}
                        onClick={checkoutHandler}
                      >
                        Yes
                      </Button>
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Button
                        onClick={() => setConfirming(false)}
                        mt="md"
                        color="gray"
                        fullWidth
                        leftSection={<IconX />}
                      >
                        No
                      </Button>
                    </Grid.Col>
                  </Grid>
                </>
              )}
            </Grid.Col>
          </Grid>
        </>
      )}
    </>
  );
}
