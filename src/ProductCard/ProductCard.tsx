import Image from "next/image";
import Button from "@/components/Button/Button";
import { Product } from "@/data/products"; // Import our new Type
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  product: Product;
  index: number;
};

export default function ProductCard({ product, index }: ProductCardProps) {
  // We'll use the index to flip the layout (image left, text right)
  const isEven = (index + 1) % 2 === 0;
  const cardClassName = isEven
    ? `${styles.card} ${styles.reversed}`
    : styles.card;

  return (
    <article className={cardClassName}>
      {/* Image Column */}
      <picture className={styles.imageWrapper}>
        <source
          media="(min-width: 1024px)"
          srcSet={product.categoryImage.desktop}
        />
        <source
          media="(min-width: 768px)"
          srcSet={product.categoryImage.tablet}
        />
        <img
          src={product.categoryImage.mobile}
          alt={product.name}
          className={styles.image}
        />
      </picture>

      {/* Content Column */}
      <div className={styles.content}>
        {product.new && <p className={styles.overline}>New Product</p>}
        <h2 className={styles.title}>{product.name}</h2>
        <p className={styles.description}>{product.description}</p>
        <Button href={`/${product.category}/${product.slug}`} variant="primary">
          See Product
        </Button>
      </div>
    </article>
  );
}
