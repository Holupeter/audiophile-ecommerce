"use client";

import { useParams } from "next/navigation";
import CategoryHeader from "@/components/CategoryHeader/CategoryHeader";
import HomepageCategories from "@/components/HomepageCategories/HomepageCategories";
import AudioGearSection from "@/components/AudioGearSection/AudioGearSection";
import styles from "./CategoryPage.module.css";
import { productData } from "@/data/products";
import ProductCard from "@/ProductCard/ProductCard";

export default function CategoryPage() {
  const params = useParams();
  const categoryName = params.category as string; // 'headphones', 'speakers', etc.

  // Filter products based on the category from the URL
const filteredProducts = productData
  .filter((product) => product.category === categoryName)
  .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1)); // Show 'new' products first
  
  // Capitalize the category name for the header
  const title = categoryName ? categoryName.toUpperCase() : "";

  return (
    <main>
      <CategoryHeader title={title} />
      
      {/* Product list will go here */}
      <div className={styles.productList}>
         {filteredProducts.map((product, index) => (
           <ProductCard key={product.id} product={product} index={index} />
         ))}
      </div>
      
      {/* These sections are reused from the homepage! */}
      <div className={styles.sharedSections}>
        <HomepageCategories />
        <AudioGearSection />
      </div>
    </main>
  );
}