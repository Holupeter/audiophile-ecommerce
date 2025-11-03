import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css"; // For styling in the next step

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* The orange decorative line */}
        <div className={styles.line}></div> 

        <div className={styles.topSection}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/assets/shared/logo.svg"
              alt="Audiophile Logo"
              width={143}
              height={25}
            />
          </Link>
          <nav className={styles.nav}>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/headphones">Headphones</Link></li>
              <li><Link href="/speakers">Speakers</Link></li>
              <li><Link href="/earphones">Earphones</Link></li>
            </ul>
          </nav>
        </div>

        <p className={styles.description}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>

          <div className={styles.socialLinks}>
            <Link href="#" aria-label="Visit our Facebook page">
              <Image
                src="/assets/shared/icon-facebook.svg"
                alt=""
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" aria-label="Visit our Twitter page">
              <Image
                src="/assets/shared/icon-twitter.svg"
                alt=""
                width={24}
                height={20}
              />
            </Link>
            <Link href="#" aria-label="Visit our Instagram page">
              <Image
                src="/assets/shared/icon-instagram.svg"
                alt=""
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}