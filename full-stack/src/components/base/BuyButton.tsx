import { Button } from "@mantine/core";

interface IBuyButton {
  onClick: () => void;
}
export default function BuyButton({ onClick }: IBuyButton) {
  return (
    <Button color="green" fullWidth mt="md" radius="md" onClick={onClick}>
      Buy
    </Button>
  );
}
