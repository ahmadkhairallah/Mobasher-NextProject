import { Product } from "@/types/Product";
import { create } from "zustand";

// Define the shape of the product store
type ProductStore = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};

// Zustand store for managing product data
export const useProductsStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
