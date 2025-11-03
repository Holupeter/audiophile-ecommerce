"use client";

import { useParams } from "next/navigation";
import { productData } from "@/data/products";
import GoBackLink from "@/components/GoBackLink/GoBackLink";
import HomepageCategories from "@/components/HomepageCategories/HomepageCategories";
import AudioGearSection from "@/components/AudioGearSection/AudioGearSection";
import styles from "./ProductPage.module.css";
import ProductDetailCard from "@/components/ProductDetailCard/ProductDetailCard";
import ProductFeatures from "@/components/ProductFeatures/ProductFeatures";
import ProductGallery from "@/components/ProductGallery/ProductGallery";
import YouMayAlsoLike from "@/components/YouMayAlsoLike/YouMayAlsoLike";

export default function ProductDetailPage() {
  const params = useParams();
  const productSlug = params.slug as string;

  // Find the single product from our data
  const product = productData.find((p) => p.slug === productSlug);

  // Handle case where product isn't found
  if (!product) {
    return (
      <main className={styles.container}>
        <div className={styles.goBackWrapper}>
          <GoBackLink />
        </div>
        <p>Product not found.</p>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <div className={styles.goBackWrapper}>
        <GoBackLink />
      </div>

      {/* Product content will go here */}
      <h1 className={styles.placeholder}>
        <ProductDetailCard product={product} />
        <ProductFeatures 
            features={product.features} 
            includes={product.includes} 
        />
        <ProductGallery gallery={product.gallery} />
        <YouMayAlsoLike others={product.others} />
      </h1>
      
      {/* We reuse these sections again! */}
      <div className={styles.sharedSections}>
        <HomepageCategories />
        <AudioGearSection />
      </div>
    </main>
  );
}
