import GoBackLink from "@/components/GoBackLink/GoBackLink";
import styles from "./CheckoutPage.module.css";
import CheckoutForm from "@/components/CheckoutForm/CheckoutForm";
import CheckoutSummary from "@/components/CheckoutSummary/CheckoutSummary";

export default function CheckoutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.goBackWrapper}>
          <GoBackLink />
        </div>

        {/* The two-column layout */}
        <div className={styles.grid}>
          <div className={styles.formWrapper}>
            <CheckoutForm />
          </div>
          <div className={styles.summaryWrapper}>
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </main>
  );
}