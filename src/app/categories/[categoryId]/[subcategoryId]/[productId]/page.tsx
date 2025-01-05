import ProductDetailsClient from "@/components/ProductDetailsClient";

export default async function ProductDetailsPage({
  params,
}: Readonly<{
  params: Promise<{ productId: string }>;
}>) {
  // Extract the product ID from the parameters
  const { productId } = await params;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4">
          Product Details
        </h2>
        <p className="text-textMedium text-center max-w-2xl mx-auto">
          Explore the detailed features and specifications of the selected product.
        </p>
      </div>
      <ProductDetailsClient asin={productId} />
    </div>
  );
}
