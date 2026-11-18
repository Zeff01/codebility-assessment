import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format";
import { FREE_SHIPPING_THRESHOLD } from "../constants";
import type { Cart } from "../types";

export function CartSummary({ cart }: { cart: Cart }) {
  const untilFreeShipping = FREE_SHIPPING_THRESHOLD - cart.subtotal;
  const progress = Math.min(cart.subtotal / FREE_SHIPPING_THRESHOLD, 1);

  return (
    <section
      aria-labelledby="summary-heading"
      className="space-y-5 rounded-3xl bg-surface p-6 shadow-xl shadow-indigo-500/5 ring-1 ring-border"
    >
      <h2 id="summary-heading" className="font-display text-xl font-bold">
        Order summary
      </h2>

      <div className="space-y-2 rounded-2xl bg-accent-soft p-4">
        <p className="text-sm font-medium">
          {untilFreeShipping > 0 ? (
            <>Add {formatCurrency(untilFreeShipping)} more for free shipping.</>
          ) : (
            <>You&apos;ve unlocked free shipping.</>
          )}
        </p>
        <div
          role="progressbar"
          aria-label="Progress to free shipping"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
          className="h-2 overflow-hidden rounded-full bg-white/70 dark:bg-white/10"
        >
          <div
            className="h-full rounded-full bg-linear-to-r from-indigo-500 to-violet-500 transition-[width] duration-500"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      <dl className="space-y-3 text-sm">
        <Row label={`Subtotal (${cart.itemCount} ${cart.itemCount === 1 ? "item" : "items"})`}>
          {formatCurrency(cart.subtotal)}
        </Row>
        <Row label="Shipping">{cart.shipping === 0 ? "Free" : formatCurrency(cart.shipping)}</Row>
        <div className="border-t border-border pt-3">
          <Row label="Total" emphasis>
            {formatCurrency(cart.total)}
          </Row>
        </div>
      </dl>

      <div className="space-y-2">
        <Button size="lg" className="w-full" disabled aria-describedby="checkout-note">
          Checkout
        </Button>
        <p id="checkout-note" className="text-center text-xs text-muted">
          Checkout isn&apos;t available in this demo.
        </p>
      </div>
    </section>
  );
}

function Row({ label, children, emphasis }: { label: string; children: ReactNode; emphasis?: boolean }) {
  return (
    <div className={emphasis ? "flex items-baseline justify-between font-display text-xl font-bold" : "flex justify-between"}>
      <dt className={emphasis ? undefined : "text-muted"}>{label}</dt>
      <dd className="tabular-nums">{children}</dd>
    </div>
  );
}
