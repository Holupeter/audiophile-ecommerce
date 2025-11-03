"use client";
import Image from "next/image";
import { CartItem as CartItemType } from "@/data/types";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/formatters";
import styles from "./CartItem.module.css";

type CartItemProps = {
  item: CartItemType;
};

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity } = useCart();

  const handleIncrease = () => {
    updateQuantity(item.product.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    updateQuantity(item.product.id, item.quantity - 1);
  };

  return (
    <li className={styles.cartItem}>
      <Image
        src={item.product.image.mobile} // Using mobile image, it's small
        alt={item.product.name}
        width={64}
        height={64}
        className={styles.image}
      />
      <div className={styles.details}>
        <p className={styles.name}>{item.product.shortName}</p>
        <p className={styles.price}>{formatPrice(item.product.price)}</p>
      </div>
      <div className={styles.quantitySelector}>
        <button onClick={handleDecrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
    </li>
  );
}