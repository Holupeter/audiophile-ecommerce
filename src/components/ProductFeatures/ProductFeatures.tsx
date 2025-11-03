import { Product } from "@/data/products";
import styles from "./ProductFeatures.module.css";

type ProductFeaturesProps = {
  features: string;
  includes: Product["includes"]; // Get the type from our Product
};

export default function ProductFeatures({
  features,
  includes,
}: ProductFeaturesProps) {
  // Split the features string into two paragraphs
  const featureParagraphs = features.split("\n\n");

  return (
    <section className={styles.container}>
      {/* --- Features Column --- */}
      <div className={styles.features}>
        <h2 className={styles.title}>Features</h2>
        {featureParagraphs.map((paragraph, index) => (
          <p key={index} className={styles.featureText}>
            {paragraph}
          </p>
        ))}
      </div>

      {/* --- In the Box Column --- */}
      <div className={styles.inTheBox}>
        <h2 className={styles.title}>In the Box</h2>
        <ul className={styles.includesList}>
          {includes.map((item) => (
            <li key={item.item}>
              <span className={styles.quantity}>{item.quantity}x</span>
              <span className={styles.item}>{item.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}