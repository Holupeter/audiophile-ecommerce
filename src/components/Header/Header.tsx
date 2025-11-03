"use client";
import { useState } from "react"; // --- ADD THIS ---
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem/CartItem"; // --- ADD THIS ---
import Button from "@/components/Button/Button"; // --- ADD THIS ---
import { formatPrice } from "@/utils/formatters"; // --- ADD THIS ---

export default function Header() {
  //const { cartCount } = useCart(); // Get the count!
  const { cartCount, cartItems, removeAll, totalPrice } = useCart(); // --- UPDATE THIS ---
  const [isModalOpen, setIsModalOpen] = useState(false); // --- ADD THIS ---

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  
  return (
    // We use semantic tags like <header> for accessibility
    <header className={styles.header}> 
      <div className={styles.container}>

        {/* Hamburger Menu - Mobile Only */}
        <button className={styles.hamburgerBtn}>
          <Image
            src="/assets/shared/icon-hamburger.svg"
            alt="Menu"
            width={16}
            height={15}
          />
        </button>

        {/* Logo */}
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/assets/shared/logo.svg"
            alt="Audiophile Logo"
            width={143}
            height={25}
          />
        </Link>

        {/* Navigation Links - Tablet/Desktop Only */}
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/headphones">Headphones</Link>
            </li>
            <li>
              <Link href="/speakers">Speakers</Link>
            </li>
            <li>
              <Link href="/earphones">Earphones</Link>
            </li>
          </ul>
        </nav>

        {/* Cart Icon */}
        <button className={styles.cartBtn} onClick={handleToggleModal}> {/* --- UPDATE THIS --- */}
            <Image
                src="/assets/shared/icon-cart.svg"
                alt="View Cart"
                width={23}
                height={20}
            />
            {cartCount > 0 && (
                <span className={styles.cartCount}>{cartCount}</span>
            )}
        </button>

        {isModalOpen && (
  <>
    {/* Overlay to close modal when clicked */}
    <div className={styles.overlay} onClick={handleCloseModal}></div>

    {/* The Cart Modal */}
    <div className={styles.cartModal}>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Cart ({cartCount})</h2>
        <button onClick={removeAll} className={styles.removeAllBtn}>
          Remove all
        </button>
      </div>

      {cartCount > 0 ? (
        <>
          <ul className={styles.cartList}>
            {cartItems.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </ul>
          <div className={styles.totalWrapper}>
            <span className={styles.totalLabel}>Total</span>
            <span className={styles.totalPrice}>
              {formatPrice(totalPrice)}
            </span>
          </div>
          <Button href="/checkout" variant="primary">
            Checkout
          </Button>
        </>
        ) : (
        <p className={styles.emptyMessage}>Your cart is empty.</p>
        )}
        </div>
        </>
        )}

      </div>
    </header>
  );
}