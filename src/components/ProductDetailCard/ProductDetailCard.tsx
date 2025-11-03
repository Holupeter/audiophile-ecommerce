"use client";// This component is now intractive
import { useState } from "react";
import { useCart } from "@/context/CartContext";// Import our new hook
import Image from "next/image";
import { Product } from "@/data/products";
import { formatPrice } from "@/utils/formatters"; // Import our new helper
import styles from "./ProductDetailCard.module.css";

type ProductDetailCardProps = {
  product: Product;
};

export default function ProductDetailCard({ product }: ProductDetailCardProps) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    // --- Add these helper functions ---
    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrease = () => {
        setQuantity((prev) => Math.max(1, prev - 1)); // Don't go below 1
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        // We could add a "success!" message here later
        console.log(`Added ${quantity} of ${product.name} to cart`);
    };
  
    return (
    <article className={styles.card}>
      {/* Image Column */}
      <picture className={styles.imageWrapper}>
        <source
          media="(min-width: 1024px)"
          srcSet={product.image.desktop}
        />
        <source
          media="(min-width: 768px)"
          srcSet={product.image.tablet}
        />
        <img
          src={product.image.mobile}
          alt={product.name}
          className={styles.image}
        />
      </picture>

      {/* Content Column */}
      <div className={styles.content}>
        {product.new && <p className={styles.overline}>New Product</p>}
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>{formatPrice(product.price)}</p>

        {/* Add to Cart Area - We'll make this functional later */}
        <div className={styles.addToCartWrapper}>
            <div className={styles.quantitySelector}>
                <button onClick={handleDecrease}>-</button> {/* Add onClick */}
                <span>{quantity}</span> {/* Use state for quantity */}
                <button onClick={handleIncrease}>+</button> {/* Add onClick */}
            </div>
            <button className={styles.cartButton} onClick={handleAddToCart}> {/* Add onClick */}
                Add to Cart
            </button>
        </div>
      </div>
    </article>
  );
}