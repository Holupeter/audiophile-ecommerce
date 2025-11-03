"use client";

import { useRouter } from "next/navigation";
import styles from "./GoBackLink.module.css"; // We'll just create this file too

export default function GoBackLink() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.back(); // This is the magic line
  };

  return (
    <button onClick={handleClick} className={styles.goBackLink}>
      Go Back
    </button>
  );
}