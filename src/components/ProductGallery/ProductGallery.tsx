import { Product } from "@/data/products";
import styles from "./ProductGallery.module.css";

type ProductGalleryProps = {
  gallery: Product["gallery"];
};

export default function ProductGallery({ gallery }: ProductGalleryProps) {
  return (
    <section className={styles.gallery}>
      {/* First Image (Small) */}
      <picture className={styles.galleryImage1}>
        <source
          media="(min-width: 1024px)"
          srcSet={gallery.first.desktop}
        />
        <source media="(min-width: 768px)" srcSet={gallery.first.tablet} />
        <img src={gallery.first.mobile} alt="Product gallery" />
      </picture>

      {/* Second Image (Small) */}
      <picture className={styles.galleryImage2}>
        <source
          media="(min-width: 1024px)"
          srcSet={gallery.second.desktop}
        />
        <source media="(min-width: 768px)" srcSet={gallery.second.tablet} />
        <img src={gallery.second.mobile} alt="Product gallery" />
      </picture>

      {/* Third Image (Large) */}
      <picture className={styles.galleryImage3}>
        <source
          media="(min-width: 1024px)"
          srcSet={gallery.third.desktop}
        />
        <source media="(min-width: 768px)" srcSet={gallery.third.tablet} />
        <img src={gallery.third.mobile} alt="Product gallery" />
      </picture>
    </section>
  );
}