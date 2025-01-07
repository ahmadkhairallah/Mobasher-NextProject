import React from "react";
import SubcategoryProductsClient from "@/components/SubCategoryListClient";
import { Product } from "@/types/Product";
import Link from "next/link";

type PageProps = {
  params: Promise<{ subcategoryId: string }>;
  searchParams: Promise<Record<string, string>>;
};

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
}: PageProps) {
  const { subcategoryId } = await params;
  const { page = "1" } = await searchParams;

  const currentPage = parseInt(page, 10);

  const response: ReponseType = await fetch(
    process.env.NEXT_GRAPHQL_API_URL as string,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_GRAPHQL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query GetProductsByCategory {
          amazonProductCategory(input: {categoryId: "${subcategoryId}"}) {
            productResults(input: {page: ${currentPage}}) {
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
      }),
    }
  )
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((error) => console.error(error));

  return (
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

      <SubcategoryProductsClient
        products={response.amazonProductCategory.productResults.results}
      />

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
  );
}
