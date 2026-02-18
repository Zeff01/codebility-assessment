import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-4 py-16">
      <h2 className="text-2xl font-semibold">Product not found</h2>
      <p className="text-sm text-muted-foreground">
        The product you are looking for is not available.
      </p>
      <Button asChild className="w-fit">
        <Link href="/">Browse products</Link>
      </Button>
    </div>
  );
}
