import SubCategoryItem from "@/components/SubCategoryItem";

import { Category } from "@/types/Category";
import { Suspense } from "react";

interface RootCategoriesQueryData {
  amazonProductCategory: Category;
}

export default async function CategoryProductsPage({
  params,
}: Readonly<{
  params: Promise<{ categoryId: string }>;
}>) {
  const { categoryId } = await params;
  const response: RootCategoriesQueryData = await fetch(
    process.env.NEXT_GRAPHQL_API_URL as string,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_GRAPHQL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query amazonProduct {
 
  amazonProductCategory(input: {categoryId: "${categoryId}"}) {
    id
    name
    subcategories {
      id
      name
    }
  }
}`,
        variables: {
          input: {
            domain: "US",
            category: categoryId,
          },
        },
      }),
    }
  )
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((error) => console.error(error));

  return (
    <Suspense
    fallback={
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center">
          {/* Animated Spinner */}
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-lg font-semibold text-primary mb-4">Loading products...</p>
        </div>
      </div>
    }
  >
    <div className="mb-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-6">
        Products for Category: {response?.amazonProductCategory?.name}
      </h1>
      <p className="text-textMedium text-center max-w-2xl mx-auto">
        Browse through our curated selection of products and subcategories tailored to your needs.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {response?.amazonProductCategory.subcategories?.map((subcategory) => (
        <SubCategoryItem
          key={subcategory.id}
          item={subcategory}
          categoryId={categoryId}
        />
      ))}
    </div>
  </Suspense>
  
  );
}
