import { Button } from "@mantine/core";

interface ICartButton {
  onClick: () => void;
}
export default function CartButton({ onClick }: ICartButton) {
  return (
    <Button color="gray" fullWidth mt="md" radius="md" onClick={onClick}>
      Add to Cart
    </Button>
  );
}
