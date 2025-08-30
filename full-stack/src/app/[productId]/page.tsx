"use client";
import { useParams } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import { ProductInfo } from "@/components/products/ProductInfo";
import CartModal from "@/components/carts/CartModal";
import BuyNowModal from "@/components/products/BuyNowModal";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { Alert } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
export default function ProductDetail() {
  const params = useParams();
  const products = useAppSelector((state) => state.product.products);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const product = products.find(
    (productItem) => productItem.id === +params.productId!
  );

  const [openedCart, { open: openCart, close: closeCart }] =
    useDisclosure(false);

  const [openedBuyNow, { open: openBuyNow, close: closeBuyNow }] =
    useDisclosure(false);

  return (
    <>
      {showMessage && (
        <Alert
          variant="light"
          color="green"
          title="Success"
          icon={<IconCheck />}
          mb={10}
        >
          {message}
        </Alert>
      )}

      {product && (
        <ProductInfo {...product} onBuy={openBuyNow} onAddToCart={openCart} />
      )}
      {product && openedCart && (
        <CartModal
          opened={openedCart}
          close={closeCart}
          productId={product.id}
          onSuccess={() => {
            setShowMessage(true);
            setMessage("Cart has been added");
          }}
        />
      )}

      {product && openedBuyNow && (
        <BuyNowModal
          opened={openedBuyNow}
          close={closeBuyNow}
          productId={product.id}
          onSuccess={() => {
            setShowMessage(true);
            setMessage("Item has been checkout");
          }}
        />
      )}
    </>
  );
}
