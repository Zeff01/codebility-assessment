"use client";
import { Grid, Alert, Title } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import ProductItem from "@/components/products/ProductItem";
import { useDisclosure } from "@mantine/hooks";
import CartModal from "@/components/carts/CartModal";
import { useEffect, useState } from "react";
import BuyNowModal from "@/components/products/BuyNowModal";
import { productActions } from "@/lib/features/products/productSlice";
import { cartActions } from "@/lib/features/carts/cartSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const [openedCart, { open: openCart, close: closeCart }] =
    useDisclosure(false);

  const [openedBuyNow, { open: openBuyNow, close: closeBuyNow }] =
    useDisclosure(false);
  const [selectedProductId, setSelectedProductId] = useState<number>();
  const products = useAppSelector((state) => state.product.products);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = setTimeout(async () => {
      const productStore = localStorage.getItem("products");

      if (!!productStore) {
        const products = JSON.parse(productStore);
        dispatch(productActions.setProducts(products));
      } else {
        const response = await fetch("/api/products");
        const data = await response.json();
        dispatch(productActions.setProducts(data));
        localStorage.setItem("products", JSON.stringify(data));
      }

      const cartStore = localStorage.getItem("carts");

      // if (!!cartStore) {
      //   const carts = JSON.parse(cartStore);
      //   dispatch(cartActions.setCarts(carts));
      // }
    }, 500);

    return () => {
      clearTimeout(fetchProducts);
    };
  }, []);

  useEffect(() => {
    const isShownTimeout = setTimeout(() => {
      if (showMessage) setShowMessage(false);
    }, 4000);

    return () => {
      clearTimeout(isShownTimeout);
    };
  }, [showMessage]);

  const addToCartHandler = (id: number) => {
    closeBuyNow();
    openCart();

    setSelectedProductId(id);
  };

  const buyNowHandler = (id: number) => {
    closeCart();
    openBuyNow();
    setSelectedProductId(id);
  };

  return (
    <>
      <Title fz={32} fw={700} mb="md">
        Product List
      </Title>
      {showMessage && (
        <Alert
          variant="light"
          color="green"
          title="Success"
          icon={<IconCheck />}
          mb={10}
        >
          Cart has been added
        </Alert>
      )}
      <Grid>
        {products.map((product) => (
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={product.id}>
            <ProductItem
              {...product}
              onAddToCart={addToCartHandler}
              onBuyNow={buyNowHandler}
            />
          </Grid.Col>
        ))}
      </Grid>

      {selectedProductId && openedCart && (
        <CartModal
          opened={openedCart}
          close={closeCart}
          productId={selectedProductId}
          onSuccess={() => setShowMessage(true)}
        />
      )}

      {selectedProductId && openedBuyNow && (
        <BuyNowModal
          opened={openedBuyNow}
          close={closeBuyNow}
          productId={selectedProductId}
          onSuccess={() => setShowMessage(true)}
        />
      )}
    </>
  );
}
