import Button from "@/components/Button/Button";
import styles from "./HomepageHero.module.css";

export default function HomepageHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.overline}>New Product</p>
          <h1 className={styles.title}>XX99 Mark II Headphones</h1>
          <p className={styles.description}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button href="/headphones/xx99-mark-two-headphones" variant="primary">
            See Product
          </Button>
        </div>
      </div>
    </section>
  );
}