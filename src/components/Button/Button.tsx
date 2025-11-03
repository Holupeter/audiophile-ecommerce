import Link from "next/link";
import styles from "./Button.module.css";

// We define the types of props our component can accept
type ButtonProps = {
  href: string;
  variant: "primary" | "secondary" | "tertiary" | "black";
  children: React.ReactNode;
};

export default function Button({ href, variant, children }: ButtonProps) {
  // We dynamically choose the CSS class based on the 'variant' prop
  const buttonClass = styles[variant] || styles.primary;

  return (
    <Link href={href} className={`${styles.button} ${buttonClass}`}>
      {children}
    </Link>
  );
}