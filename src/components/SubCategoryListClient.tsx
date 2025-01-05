"use client";

import { useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/Product";
import { useProductsStore } from "@/store/productsStore";

type ClientProps = {
  products: Product[];
};

export default function SubcategoryProductsClient({
  products,
}: Readonly<ClientProps>) {
  const setProducts = useProductsStore((state) => state.setProducts);

  useEffect(() => {
    setProducts(products);
  }, [products, setProducts]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.title + product.asin} product={product} />
      ))}
    </div>
  );
}
