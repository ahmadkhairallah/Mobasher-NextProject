"use client";

import { useEffect, useState } from "react";
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(products);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer); // Cleanup timer
  }, [products, setProducts]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-lg font-semibold text-primary mb-4">Loading products...</p>
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.title + product.asin} product={product} />
      ))}
    </div>
  );
}
