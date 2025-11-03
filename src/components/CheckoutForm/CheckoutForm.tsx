"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api"; // Make sure this path is correct
import { useCart } from "@/context/CartContext";
import { SHIPPING_FEE, VAT_RATE } from "@/data/constants"; // Import constants
import { useRouter } from "next/navigation";
import OrderConfirmationModal from "../OrderConfirmationModal/OrderConfirmationModal";
import styles from "./CheckoutForm.module.css";

// Define the shape of our form data
type FormValues = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  eMoneyNumber?: string;
  eMoneyPin?: string;
};

export default function CheckoutForm() {
  // --- STATE AND HOOKS ---
  const [paymentMethod, setPaymentMethod] = useState("eMoney");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter(); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const createOrder = useMutation(api.orders.createOrder);
  const { cartItems, totalPrice, removeAll } = useCart();

  // --- FORM SUBMISSION HANDLER ---
  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    // 1. Format cart items for the backend
    const formattedItems = cartItems.map((item) => ({
      id: item.product.id,
      name: item.product.shortName,
      price: item.product.price,
      quantity: item.quantity,
    }));

    // 2. Calculate totals
    const calculatedVat = totalPrice * VAT_RATE;
    const grandTotal = totalPrice + SHIPPING_FEE;

    try {
      // 3. Call the backend mutation!
      const orderId = await createOrder({
        // Form Data
        ...formData,
        paymentMethod: paymentMethod,

        // Cart Data
        items: formattedItems,
        total: totalPrice,
        shipping: SHIPPING_FEE,
        vat: calculatedVat,
        grandTotal: grandTotal,
      });

      console.log("SUCCESS! Order saved with ID:", orderId);
      setIsModalOpen(true);

      // 4. Clear the cart after successful submission
      //removeAll();

      // We'll add redirection here in the next step
      
    } catch (error) {
      console.error("Failed to create order:", error);
      // We could show an error message to the user here
    }
  };

  //handleCloseModal
  const handleCloseModal = () => {
    removeAll();
    setIsModalOpen(false);
    router.push("/");
  };

  // --- RENDER ---
  return (
    <form
      id="checkout-form"
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)} // Connects to our handler
      noValidate
    >
      <h1 className={styles.title}>Checkout</h1>

      {/* --- BILLING DETAILS --- */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Billing Details</legend>
        <div className={styles.grid}>
          <div className={styles.formField}>
            <div className={styles.labelWrapper}>
              <label htmlFor="name">Name</label>
              {errors.name && (
                <span className={styles.errorMessage}>{errors.name.message}</span>
              )}
            </div>
            <input
              type="text"
              id="name"
              placeholder="Alexei Ward"
              className={errors.name ? styles.errorInput : ""}
              {...register("name", { required: "Name is required" })}
            />
          </div>

          <div className={styles.formField}>
            <div className={styles.labelWrapper}>
              <label htmlFor="email">Email Address</label>
              {errors.email && (
                <span className={styles.errorMessage}>{errors.email.message}</span>
              )}
            </div>
            <input
              type="email"
              id="email"
              placeholder="alexei@mail.com"
              className={errors.email ? styles.errorInput : ""}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Wrong email format",
                },
              })}
            />
          </div>

          <div className={styles.formField}>
            <div className={styles.labelWrapper}>
              <label htmlFor="phone">Phone Number</label>
              {errors.phone && (
                <span className={styles.errorMessage}>{errors.phone.message}</span>
              )}
            </div>
            <input
              type="tel"
              id="phone"
              placeholder="+1 202-555-0136"
              className={errors.phone ? styles.errorInput : ""}
              {...register("phone", { required: "Phone is required" })}
            />
          </div>
        </div>
      </fieldset>

      {/* --- SHIPPING INFO --- */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Shipping Info</legend>
        <div className={`${styles.formField} ${styles.fullWidth}`}>
          <div className={styles.labelWrapper}>
            <label htmlFor="address">Address</label>
            {errors.address && (
              <span className={styles.errorMessage}>{errors.address.message}</span>
            )}
          </div>
          <input
            type="text"
            id="address"
            placeholder="1137 Williams Avenue"
            className={errors.address ? styles.errorInput : ""}
            {...register("address", { required: "Address is required" })}
          />
        </div>
        <div className={styles.grid}>
          <div className={styles.formField}>
            <div className={styles.labelWrapper}>
              <label htmlFor="zip">ZIP Code</label>
              {errors.zip && (
                <span className={styles.errorMessage}>{errors.zip.message}</span>
              )}
            </div>
            <input
              type="text"
              id="zip"
              placeholder="10001"
              className={errors.zip ? styles.errorInput : ""}
              {...register("zip", { required: "ZIP is required" })}
            />
          </div>
          <div className={styles.formField}>
            <div className={styles.labelWrapper}>
              <label htmlFor="city">City</label>
              {errors.city && (
                <span className={styles.errorMessage}>{errors.city.message}</span>
              )}
            </div>
            <input
              type="text"
              id="city"
              placeholder="New York"
              className={errors.city ? styles.errorInput : ""}
              {...register("city", { required: "City is required" })}
            />
          </div>
          <div className={styles.formField}>
            <div className={styles.labelWrapper}>
              <label htmlFor="country">Country</label>
              {errors.country && (
                <span className={styles.errorMessage}>{errors.country.message}</span>
              )}
            </div>
            <input
              type="text"
              id="country"
              placeholder="United States"
              className={errors.country ? styles.errorInput : ""}
              {...register("country", { required: "Country is required" })}
            />
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

        {paymentMethod === "eMoney" && (
          <div className={`${styles.grid} ${styles.eMoneyFields}`}>
            <div className={styles.formField}>
              <div className={styles.labelWrapper}>
                <label htmlFor="eMoneyNumber">e-Money Number</label>
                {errors.eMoneyNumber && (
                  <span className={styles.errorMessage}>
                    {errors.eMoneyNumber.message}
                  </span>
                )}
              </div>
              <input
                type="text"
                id="eMoneyNumber"
                placeholder="238521993"
                className={errors.eMoneyNumber ? styles.errorInput : ""}
                {...register("eMoneyNumber", {
                  required: "e-Money Number is required",
                })}
              />
            </div>
            <div className={styles.formField}>
              <div className={styles.labelWrapper}>
                <label htmlFor="eMoneyPin">e-Money PIN</label>
                {errors.eMoneyPin && (
                  <span className={styles.errorMessage}>
                    {errors.eMoneyPin.message}
                  </span>
                )}
              </div>
              <input
                type="text"
                id="eMoneyPin"
                placeholder="6891"
                className={errors.eMoneyPin ? styles.errorInput : ""}
                {...register("eMoneyPin", {
                  required: "e-Money PIN is required",
                })}
              />
            </div>
          </div>
        )}

        {paymentMethod === "cash" && (
          <div className={styles.cashMessage}>
            <p>
              The ‘Cash on Delivery’ option enables you to pay in cash when
              our delivery courier arrives at your residence. Just make sure
              your address is correct so that your order will not be
              cancelled.
            </p>
          </div>
        )}

      </fieldset>

      {/* --- 7. ADD THE MODAL RENDER --- */}
      {isModalOpen && (
         <OrderConfirmationModal
              firstItem={cartItems[0]}
              otherItemCount={cartItems.length - 1}
              grandTotal={totalPrice + SHIPPING_FEE} // Use the same logic
              onClose={handleCloseModal}
            />
        )}
    </form>
  );
}