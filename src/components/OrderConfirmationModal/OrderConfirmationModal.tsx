"use client";
import Image from "next/image";
import Link from "next/link";
import { CartItem } from "@/data/types";
import { formatPrice } from "@/utils/formatters";
import styles from "./OrderConfirmationModal.module.css";
import Button from "@/components/Button/Button";

type OrderConfirmationModalProps = {
  firstItem: CartItem;
  otherItemCount: number;
  grandTotal: number;
  onClose: () => void;
};

export default function OrderConfirmationModal({
  firstItem,
  otherItemCount,
  grandTotal,
  onClose,
}: OrderConfirmationModalProps) {
  return (
    <>
      {/* --- Overlay --- */}
      <div className={styles.overlay}></div>

      {/* --- Modal --- */}
      <div className={styles.modal}>
        <Image
          src="/assets/shared/icon-order-confirmation.svg"
          alt="Order confirmed"
          width={64}
          height={64}
          className={styles.icon}
        />
        <h2 className={styles.title}>
          Thank you
          <br />
          for your order
        </h2>
        <p className={styles.subtitle}>You will receive an email confirmation shortly.</p>

        {/* --- Order Summary --- */}
        <div className={styles.summary}>
          <div className={styles.itemList}>
            <div className={styles.firstItem}>
              <Image
                src={firstItem.product.image.mobile}
                alt={firstItem.product.shortName}
                width={50}
                height={50}
                className={styles.itemImage}
              />
              <div className={styles.itemDetails}>
                <p className={styles.itemName}>{firstItem.product.shortName}</p>
                <p className={styles.itemPrice}>
                  {formatPrice(firstItem.product.price)}
                </p>
              </div>
              <p className={styles.itemQuantity}>x{firstItem.quantity}</p>
            </div>
            {otherItemCount > 0 && (
              <p className={styles.otherItems}>
                and {otherItemCount} other item(s)
              </p>
            )}
          </div>
          <div className={styles.grandTotal}>
            <span className={styles.totalLabel}>Grand Total</span>
            <span className={styles.totalValue}>{formatPrice(grandTotal)}</span>
          </div>
        </div>

        {/* --- Back to Home Button --- */}
        {/* We use a Link component styled as a button */}
        <Link href="/" onClick={onClose} className={styles.homeButton}>
          Back to Home
        </Link>
      </div>
    </>
  );
}