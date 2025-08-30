import { Grid, Image, Text, TextInput, Title } from "@mantine/core";
import CartButton from "../base/CartButton";
import BuyButton from "../base/BuyButton";
import classes from "./ProductInfo.module.css";
import type { IProduct } from "@/lib/features/products/productSlice";

interface IProductInfo extends IProduct {
  onBuy: () => void;
  onAddToCart: () => void;
}

export function ProductInfo({
  name,
  imageUrl,
  quantity,
  description,
  onBuy,
  onAddToCart,
}: IProductInfo) {
  return (
    <div className={classes.wrapper}>
      <Image src={imageUrl} className={classes.image} alt={description} />
      <div className={classes.body} style={{ marginLeft: 40 }}>
        <Title className={classes.title}>{name}</Title>
        <Text fw={500} fz="lg" mb={5}>
          Available: {quantity}
        </Text>
        <Text fz="sm" c="dimmed">
          {description}
        </Text>

        <Grid>
          <Grid.Col span={6}>
            <CartButton onClick={onAddToCart} />
          </Grid.Col>
          <Grid.Col span={6}>
            <BuyButton onClick={onBuy} />
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
}
