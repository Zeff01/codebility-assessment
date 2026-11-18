import { EmptyState } from "@/components/empty-state";

export default function ProductNotFound() {
  return (
    <EmptyState
      as="h1"
      title="Product not found"
      description="The product you're looking for doesn't exist or was removed."
      action={{ href: "/", label: "Back to all products" }}
    />
  );
}
