import SubcategoryProductsClient from "@/components/SubCategoryListClient";
import { Product } from "@/types/Product";
import Link from "next/link";
import React, { Suspense } from "react";

type ReponseType = {
  amazonProductCategory: {
    name: string;
    productResults: {
      pageInfo: {
        currentPage: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPrevPage: boolean;
      };
      results: Product[];
    };
  };
};

export default async function SubcategoryProductsPage({
  params,
  searchParams,
}: Readonly<{
  params: Promise<{ subcategoryId: string }>;
  searchParams: Record<string, string>;
}>) {

   // Parse the current page number from the search parameters, defaulting to 1
  const page = parseInt(searchParams["page"] || "1");

  // Await the promise to get the subcategory ID from the URL parameters
  const { subcategoryId } = await params;

  // Fetch products for the subcategory with pagination and GraphQL query
  const response: ReponseType = await fetch(
    process.env.NEXT_GRAPHQL_API_URL as string,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_GRAPHQL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query GetProductsByCategory {
  amazonProductCategory(input: {categoryId: "${subcategoryId}"}) {
    productResults(input: {page: ${page}}) {
      pageInfo {
        currentPage
        hasNextPage
        hasPrevPage
        totalPages
      }
      results {
        asin
        title
        bookDescription
        mainImageUrl
        imageUrls
        featureBullets
        rating
        price {
          currency
          value
        }
      }
    }
    name
  }
}`,
        variables: {
          input: {
            domain: "US",
            category: subcategoryId,
          },
        },
      }),
    }
  )
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((error) => console.error(error));

  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <div className="p-4 bg-background min-h-screen">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary mb-2">Products</h1>
          <p className="text-lg text-textMedium">
            Discover amazing products in this subcategory:{" "}
            <span className="font-semibold">
              {response?.amazonProductCategory?.name}
            </span>
          </p>
        </header>

        {/* Product List */}
        <SubcategoryProductsClient
          products={response.amazonProductCategory.productResults.results}
        />

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          {response.amazonProductCategory.productResults.pageInfo.hasPrevPage && (
            <Link
              href={{
                search: `page=${
                  response.amazonProductCategory.productResults.pageInfo
                    .currentPage - 1
                }`,
              }}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primaryAlt transition"
            >
              Previous
            </Link>
          )}
          <span className="text-sm text-textMedium">
            Page {response.amazonProductCategory.productResults.pageInfo.currentPage} of{" "}
            {response.amazonProductCategory.productResults.pageInfo.totalPages}
          </span>
          {response.amazonProductCategory.productResults.pageInfo.hasNextPage && (
            <Link
              href={{
                search: `page=${
                  response.amazonProductCategory.productResults.pageInfo
                    .currentPage + 1
                }`,
              }}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primaryAlt transition"
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </Suspense>
  );
}
