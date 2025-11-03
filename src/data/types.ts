// src/data/types.ts
import { Product } from "./products";

export type CartItem = {
  product: Product;
  quantity: number;
};