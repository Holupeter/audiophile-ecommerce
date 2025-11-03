"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/data/products";
import { CartItem } from "@/data/types";

// 1. Define what our context will provide
type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  removeAll: () => void;
  totalPrice: number;
  cartCount: number;
};

// 2. Create the context with default empty values
const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  updateQuantity: () => {},
  removeAll: () => {},
  totalPrice: 0,
  cartCount: 0,
});

// 3. Create the "Provider" component
// This component will wrap our whole app and "provide" the cart
export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // --- Function to ADD items ---
  const addToCart = (product: Product, quantity: number) => {
    setCartItems((prevItems) => {
      // Check if item is already in cart
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        // Just update quantity
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item
        return [...prevItems, { product, quantity }];
      }
    });
  };

  // --- Function to UPDATE quantity ---
  const updateQuantity = (productId: number, newQuantity: number) => {
    setCartItems((prevItems) => {
      if (newQuantity <= 0) {
        // Remove item if quantity is 0 or less
        return prevItems.filter((item) => item.product.id !== productId);
      }
      return prevItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      );
    });
  };

  // --- Function to CLEAR cart ---
  const removeAll = () => {
    setCartItems([]);
  };

  // --- Calculate total price and count ---
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // 4. Pass down all the values to the app
  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeAll,
    totalPrice,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// 5. Create a custom "hook"
// This makes it easy to use the cart in any component
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};