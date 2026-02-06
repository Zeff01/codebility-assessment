"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";
import Image from "next/image";

export default function CartClient() {
  const { items, subtotal, setQty, remove, clear } = useCart();

  const shipping = items.length > 0 ? 8 : 0; // demo flat shipping
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <section className="panel">
        <div className="stateBox">
          <div style={{ fontWeight: 900 }}>Your cart is empty</div>
          <div className="muted">Add items from the shop to see them here.</div>
          <Link href="/" className="buttonPrimary" style={{ width: "fit-content" }}>
            Continue shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="panel cartWrap">
      <div className="cartGrid">
        <div className="cartItems">
          {items.map((i) => (
            <div key={i.id} className="cartItem">
              <Image className="cardImg" src={i.image} alt={i.title} width={220} height={220} />
              <div className="cartInfo">
                <div className="cartTitle">{i.title}</div>
                <div className="muted">${i.price.toFixed(2)} each</div>

                <div className="cartActions">
                  <button className="button" onClick={() => setQty(i.id, i.qty - 1)}>-</button>
                  <div className="qtyBox">{i.qty}</div>
                  <button className="button" onClick={() => setQty(i.id, i.qty + 1)}>+</button>

                  <button className="buttonDanger" onClick={() => remove(i.id)}>
                    Remove
                  </button>
                </div>
              </div>

              <div className="cartLineTotal">
                ${(i.qty * i.price).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <aside className="cartSummary">
          <div className="summaryTitle">Order Summary</div>

          <div className="summaryRow">
            <span className="muted">Subtotal</span>
            <b>${subtotal.toFixed(2)}</b>
          </div>

          <div className="summaryRow">
            <span className="muted">Shipping</span>
            <b>${shipping.toFixed(2)}</b>
          </div>

          <div className="summaryDivider" />

          <div className="summaryRow">
            <span>Total</span>
            <b>${total.toFixed(2)}</b>
          </div>

          <button className="buttonPrimary" onClick={() => alert("Demo checkout — not implemented")}>
            Checkout
          </button>

          <button className="button" onClick={clear}>
            Clear cart
          </button>

          <Link href="/" className="button">
            Continue shopping
          </Link>
        </aside>
      </div>
    </section>
  );
}
