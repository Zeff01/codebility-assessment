import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Grid,
  Menu,
  ActionIcon,
} from "@mantine/core";
import { IconDots, IconEye, IconFileZip, IconTrash } from "@tabler/icons-react";
import { IProduct } from "@/lib/features/products/productSlice";
import { useState } from "react";
import Link from "next/link";
import CartButton from "../base/CartButton";
import BuyButton from "../base/BuyButton";

interface IProductItem extends IProduct {
  onBuyNow?: (productId: number) => void;
  onAddToCart?: (productId: number) => void;
  withAction?: boolean;
  isCarted?: boolean;
  cartedQuantity?: number;
  CustomComponent?: React.ReactNode;
  onDelete?: () => void;
  withDelete?: boolean;
}

export default function ProductItem({
  id,
  name,
  description,
  price,
  imageUrl,
  quantity,
  onAddToCart,
  onBuyNow,
  withAction = true,
  isCarted = false,
  cartedQuantity = 0,
  CustomComponent,
  onDelete,
  withDelete = false,
}: IProductItem) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Text fw={500}>{name}</Text>
          {withDelete && (
            <Menu withinPortal position="bottom-end" shadow="sm">
              <Menu.Target>
                <ActionIcon variant="subtle" color="gray">
                  <IconDots size={16} />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item
                  onClick={onDelete}
                  leftSection={<IconTrash size={14} />}
                  color="red"
                >
                  Delete
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          )}
        </Group>
      </Card.Section>
      <Card.Section>
        <Image src={imageUrl} height={160} alt="Norway" />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fz={12}>Item Price</Text>
        <Text fw={500}>{price}</Text>
      </Group>
      <Text fz={12}>
        Available:
        <span style={{ fontWeight: "bold" }}>{quantity}</span>
        {isCarted && " | "}
        {isCarted && (
          <>
            Cart Quantity:
            <span style={{ fontWeight: "bold" }}>{cartedQuantity}</span>
          </>
        )}
      </Text>

      <Text size="sm" c="dimmed">
        {description}
      </Text>
      {withAction && (
        <Grid>
          {isCarted && <Grid.Col span={6}>{CustomComponent}</Grid.Col>}
          <Grid.Col span={isCarted ? 6 : 4}>
            <Button
              color="blue"
              fullWidth
              mt="md"
              radius="md"
              component={Link}
              href={`/${id}`}
            >
              View
            </Button>
          </Grid.Col>
          {onBuyNow && (
            <Grid.Col span={!isCarted ? 4 : 12}>
              <BuyButton onClick={() => onBuyNow(id)} />
            </Grid.Col>
          )}
          {onAddToCart && (
            <Grid.Col span={!isCarted ? 4 : 12}>
              <CartButton onClick={() => onAddToCart(id)} />
            </Grid.Col>
          )}
        </Grid>
      )}
    </Card>
  );
}
