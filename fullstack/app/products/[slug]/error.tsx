"use client";

import { ErrorState } from "@/components/error-state";

export default function ProductError({ error, retry }: { error: unknown; retry: () => void }) {
  return <ErrorState error={error} retry={retry} title="We couldn't load this product" />;
}
