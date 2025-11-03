// src/components/YouMayAlsoLike/YouMayAlsoLike.tsx
import Image from "next/image";
import Button from "@/components/Button/Button";
import { Product, productData } from "@/data/products"; // Import all data
import styles from "./YouMayAlsoLike.module.css";

type YouMayAlsoLikeProps = {
  others: Product["others"]; // Get the type from our Product
};

// Helper function to find the full product (and its category) from a slug
function getProductCategory(slug: string) {
  const product = productData.find((p) => p.slug === slug);
  return product ? product.category : "";
}

export default function YouMayAlsoLike({ others }: YouMayAlsoLikeProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>You May Also Like</h2>
      <div className={styles.grid}>
        {others.map((item) => {
          // Find the category for the item
          const category = getProductCategory(item.slug);
          const productLink = `/${category}/${item.slug}`;

          return (
            <div key={item.slug} className={styles.item}>
              {/* Image */}
              <picture className={styles.imageWrapper}>
                <source
                  media="(min-width: 1024px)"
                  srcSet={item.image.desktop}
                />
                <source media="(min-width: 768px)" srcSet={item.image.tablet} />
                <img
                  src={item.image.mobile}
                  alt={item.name}
                  className={styles.image}
                />
              </picture>

              {/* Content */}
              <h3 className={styles.itemName}>{item.name}</h3>
              <Button href={productLink} variant="primary">
                See Product
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}