import Image from "next/image";
import Button from "@/components/Button/Button";
import styles from "./HomepagePromos.module.css";
import { productData } from "@/data/products";

// Helper to find the category for a given slug
function getProductCategory(slug: string) {
  const product = productData.find((p) => p.slug === slug);
  return product ? product.category : "";
}

export default function HomepagePromos() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* --- ZX9 Speaker Promo --- */}
        <div className={`${styles.promoCard} ${styles.zx9}`}>
          
          {/* Background Circles */}
          <div className={styles.circlePattern}>
            <Image
              src="/assets/shared/pattern-circles.svg"
              alt=""
              width={944} // Full size of the pattern
              height={944}
            />
          </div>

          {/* Speaker Image - we'll use <picture> for art direction */}
          <picture className={styles.zx9Image}>
            <source
              media="(min-width: 1024px)"
              srcSet="/assets/home/image-speaker-zx9-desktop.png"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/assets/home/image-speaker-zx9-tablet.png"
            />
            <img
              src="/assets/home/image-speaker-zx9-mobile.png"
              alt="ZX9 Speaker"
            />
          </picture>

          {/* Text Content */}
          <div className={styles.content}>
            <h2 className={styles.title}>ZX9 Speaker</h2>
            <p className={styles.description}>
              Upgrade to premium speakers that are phenomenally built to
              deliver truly remarkable sound.
            </p>
            {/* Here's our new button! */}
            <Button href={`/${getProductCategory("zx9-speaker")}/zx9-speaker`} variant="black">
              See Product
            </Button>
          </div>
        </div>
        
        {/* --- ZX7 Speaker Promo --- */}
        <div className={`${styles.promoCard} ${styles.zx7}`}>
          {/* We use <picture> again to swap images */}
          <picture className={styles.promoImageFull}>
            <source
              media="(min-width: 1024px)"
              srcSet="/assets/home/image-speaker-zx7-desktop.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/assets/home/image-speaker-zx7-tablet.jpg"
            />
            <img
              src="/assets/home/image-speaker-zx7-mobile.jpg"
              alt="ZX7 Speaker"
              className={styles.promoImageFull}
            />
          </picture>

          {/* Text Content - positioned absolutely */}
          <div className={styles.content}>
            <h2 className={styles.titleSecondary}>ZX7 Speaker</h2>
            {/* Here we use our 'secondary' button! */}
            <Button href={`/${getProductCategory("zx7-speaker")}/zx7-speaker`} variant="secondary">
              See Product
            </Button>
          </div>
        </div>

        {/* --- YX1 Earphones Promo --- */}
        <div className={`${styles.promoCard} ${styles.yx1}`}>
          {/* This one is split 50/50 */}
          <div className={styles.yx1Image}>
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet="/assets/home/image-earphones-yx1-desktop.jpg"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/assets/home/image-earphones-yx1-tablet.jpg"
              />
              <img
                src="/assets/home/image-earphones-yx1-mobile.jpg"
                alt="YX1 Earphones"
              />
            </picture>
          </div>

          <div className={styles.yx1Content}>
            <div className={styles.content}>
              <h2 className={styles.titleSecondary}>YX1 Earphones</h2>
              <Button href={`/${getProductCategory("yx1-earphones")}/yx1-earphones`} variant="secondary">
                See Product
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}