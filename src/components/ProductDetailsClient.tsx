"use client";

import { useProductsStore } from "@/store/productsStore";
import Image from "next/image";

const ProductDetailsClient = ({ asin }: { asin: string }) => {
  const products = useProductsStore((state) => state.products);
  const currentProduct = products.find((product) => product.asin === asin);

  const {
    title,
    bookDescription,
    price,
    featureBullets,
    imageUrls,
    mainImageUrl,
    rating,
  } = currentProduct || {};

  if (!currentProduct) return <p className="text-center text-gray-600 mt-4">No product found.</p>;

  console.log(currentProduct);

  return (
    <div className="p-4 bg-white shadow-md rounded-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-primary">{title}</h1>
      <p className="text-gray-700 mb-4">{bookDescription || "No description available."}</p>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Image */}
        {mainImageUrl && (
          <div className="flex justify-center">
            <Image
              src={mainImageUrl}
              alt={title || "Product Image"}
              width={400}
              height={400}
              className="rounded-md object-cover shadow-md"
            />
          </div>
        )}
        {/* Details */}
        <div className="flex-1">
          <p className="text-xl font-semibold text-gray-800">
            Price:{" "}
            <span className="text-primary">
              {price?.value ? `$${price?.value}` : "Not available"}
            </span>
          </p>
          <p className="text-lg text-gray-700 mt-2">
            Rating: <span className="font-bold">{rating || "N/A"}</span>
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            {featureBullets?.length > 0
              ? featureBullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))
              : "No features available."}
          </ul>
        </div>
      </div>

      {/* Additional Images */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-textDark mb-4">More Images</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {imageUrls && imageUrls?.length > 0 ? (
            imageUrls.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Additional image ${index + 1}`}
                className="w-full h-40 object-cover rounded-md shadow-md"
                width={150}
                height={150}
              />
            ))
          ) : (
            <p className="text-gray-500">No additional images available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsClient;
