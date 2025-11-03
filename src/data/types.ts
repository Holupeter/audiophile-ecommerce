// src/data/types.ts
import { Product }D from "./products";

export type CartItem = {
  product: Product;
  quantity: number;
};