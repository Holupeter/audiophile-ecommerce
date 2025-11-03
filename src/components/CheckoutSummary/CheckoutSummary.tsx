"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/formatters";
import { SHIPPING_FEE, VAT_RATE } from "@/data/constants";
import styles from "./CheckoutSummary.module.css";

export default function CheckoutSummary() {
  const { cartItems, totalPrice, cartCount } = useCart();

  // --- Corrected variables ---
  // Calculate VAT (tax)
  const calculatedVat = totalPrice * VAT_RATE;
  // Calculate the final total
  const grandTotal = totalPrice + SHIPPING_FEE;
  // --- End of corrections ---

  return (
    <div className={styles.summary}>
      <h2 className={styles.title}>Summary</h2>

      {cartCount > 0 ? (
        <>
          {/* --- Cart Items List --- */}
          <ul className={styles.cartList}>
            {cartItems.map((item) => (
              <li key={item.product.id} className={styles.cartItem}>
                <Image
                  src={item.product.image.mobile}
                  alt={item.product.name}
                  width={64}
                  height={64}
                  className={styles.itemImage}
                />
                <div className={styles.itemDetails}>
                  <p className={styles.itemName}>{item.product.shortName}</p>
                  <p className={styles.itemPrice}>
                    {formatPrice(item.product.price)}
                  </p>
                </div>
                <p className={styles.itemQuantity}>x{item.quantity}</p>
              </li>
            ))}
          </ul>

          {/* --- Totals List --- */}
          <ul className={styles.totalsList}>
            <li className={styles.totalRow}>
              <span className={styles.totalLabel}>Total</span>
              <span className={styles.totalValue}>
                {formatPrice(totalPrice)}
              </span>
            </li>
            <li className={styles.totalRow}>
              <span className={styles.totalLabel}>Shipping</span>
              <span className={styles.totalValue}>
                {formatPrice(SHIPPING_FEE)}
              </span>
            </li>
            <li className={styles.totalRow}>
              <span className={styles.totalLabel}>VAT (Included)</span>
              <span className={styles.totalValue}>
                {formatPrice(calculatedVat)}
              </span>
            </li>
            <li className={`${styles.totalRow} ${styles.grandTotal}`}>
              <span className={styles.totalLabel}>Grand Total</span>
              <span className={styles.totalValue}>
                {formatPrice(grandTotal)}
              </span>
            </li>
          </ul>
        </>
      ) : (
        <p className={styles.emptyMessage}>Your cart is empty.</p>
      )}

      <button type="submit" form="checkout-form" className={styles.submitButton}>
        Continue & Pay
      </button>
    </div>
  );
}