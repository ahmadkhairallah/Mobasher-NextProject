"use client";
import { useProductsStore } from "@/store/productsStore";
import { Product } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProductCard = ({ product }: { product: Product }) => {
  const { asin, title, mainImageUrl, price } = product;
  const pathname = usePathname();
  const nextPath = `${pathname}/${asin}`;

  return (
    <div
      key={product.asin}
      className="product-card p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
    >
      <Image
        src={mainImageUrl}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
        priority
        width={500}
        height={500}
      />

      <h3 className="text-md font-bold text-textDark mb-2">{title}</h3>

      <p className="text-sm text-primary font-medium mb-4">
        {`${price?.value} ${price?.currency}`}
      </p>

      <Link
        href={nextPath}
        className="mt-auto text-center inline-block px-4 py-2 bg-secondary text-primary font-medium rounded hover:bg-secondary/80 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
