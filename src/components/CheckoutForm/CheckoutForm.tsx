"use client";
import { useState } from "react";
import styles from "./CheckoutForm.module.css";
// We'll add form handling logic (useState) in a later step

export default function CheckoutForm() {
    const [paymentMethod, setPaymentMethod] = useState("eMoney"); // "eMoney" or "cash"
  
    return (
    <form className={styles.form}>
      <h1 className={styles.title}>Checkout</h1>

      {/* --- BILLING DETAILS --- */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Billing Details</legend>
        <div className={styles.grid}>
          <div className={styles.formField}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Alexei Ward" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="alexei@mail.com" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="+1 202-555-0136" />
          </div>
        </div>
      </fieldset>

      {/* --- SHIPPING INFO --- */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Shipping Info</legend>
        <div className={`${styles.formField} ${styles.fullWidth}`}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="1137 Williams Avenue"
          />
        </div>
        <div className={styles.grid}>
          <div className={styles.formField}>
            <label htmlFor="zip">ZIP Code</label>
            <input type="text" id="zip" placeholder="10001" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="New York" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" placeholder="United States" />
          </div>
        </div>
      </fieldset>

      {/* --- PAYMENT DETAILS --- */}
<fieldset className={styles.fieldset}>
  <legend className={styles.legend}>Payment Details</legend>
  <div className={styles.grid}>
    <label className={styles.formField}>Payment Method</label>
    <div className={styles.radioGroup}>
      <label
        htmlFor="eMoney"
        className={`${styles.radioLabel} ${
          paymentMethod === "eMoney" ? styles.radioChecked : ""
        }`}
      >
        <input
          type="radio"
          id="eMoney"
          name="paymentMethod"
          value="eMoney"
          checked={paymentMethod === "eMoney"}
          onChange={() => setPaymentMethod("eMoney")}
        />
        <span>e-Money</span>
      </label>
      <label
        htmlFor="cash"
        className={`${styles.radioLabel} ${
          paymentMethod === "cash" ? styles.radioChecked : ""
        }`}
      >
        <input
          type="radio"
          id="cash"
          name="paymentMethod"
          value="cash"
          checked={paymentMethod === "cash"}
          onChange={() => setPaymentMethod("cash")}
        />
        <span>Cash on Delivery</span>
      </label>
    </div>
  </div>

  {/* --- Conditional e-Money Fields --- */}
  {paymentMethod === "eMoney" && (
    <div className={`${styles.grid} ${styles.eMoneyFields}`}>
      <div className={styles.formField}>
        <label htmlFor="eMoneyNumber">e-Money Number</label>
        <input type="text" id="eMoneyNumber" placeholder="238521993" />
      </div>
      <div className={styles.formField}>
        <label htmlFor="eMoneyPin">e-Money PIN</label>
        <input type="text" id="eMoneyPin" placeholder="6891" />
      </div>
    </div>
  )}

  {/* --- Conditional Cash on Delivery Message --- */}
  {paymentMethod === "cash" && (
    <div className={styles.cashMessage}>
      <p>
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your
        address is correct so that your order will not be cancelled.
      </p>
    </div>
  )}
</fieldset>
    </form>
  );
}