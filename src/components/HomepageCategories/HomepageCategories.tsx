import Link from "next/link";
import Image from "next/image";
import styles from "./HomepageCategories.module.css";

// 1. Define our category data
const categories = [
  {
    name: "Headphones",
    href: "/headphones",
    imageSrc: "/assets/home/image-category-thumbnail-headphones.png",
  },
  {
    name: "Speakers",
    href: "/speakers",
    imageSrc: "/assets/home/image-category-thumbnail-speakers.png",
  },
  {
    name: "Earphones",
    href: "/earphones",
    imageSrc: "/assets/home/image-category-thumbnail-earphones.png",
  },
];

export default function HomepageCategories() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* 2. Loop over the data */}
        {categories.map((category) => (
          // 3. Each card is a Link
          <Link href={category.href} key={category.name} className={styles.card}>
            
            {/* 4. Product Image */}
            <div className={styles.imageWrapper}>
              <Image
                src={category.imageSrc}
                alt="" // Decorative image
                width={150} // Base width, CSS will adjust
                height={130} // Base height, CSS will adjust
                className={styles.productImage}
              />
            </div>
            
            {/* 5. Card Content */}
            <h2 className={styles.title}>{category.name}</h2>
            <div className={styles.shopLink}>
              Shop
              <Image
                src="/assets/shared/icon-arrow-right.svg"
                alt=""
                width={5}
                height={10}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}