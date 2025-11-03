import styles from "./CheckoutSummary.module.css";

export default function CheckoutSummary() {
  return (
    <div className={styles.summary}>
      <h2 className={styles.title}>Summary</h2>
      
      {/* Cart items list will go here */}
      <div className={styles.placeholder}>Cart items will be listed here</div>

      {/* Totals will go here */}
      <div className={styles.placeholder}>Totals will be here</div>

      <button className={styles.submitButton}>Continue & Pay</button>
    </div>
  );
}