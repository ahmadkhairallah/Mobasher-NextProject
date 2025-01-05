import { GET_ROOT_CATEGORIES } from "@/lib/graphql/queries";
import HeroSection from "@/components/landing/HeroSection";
import CategoryItem from "@/components/CategoryItem";
import { Suspense } from "react";

interface Subcategory {
  id: string;
  name: string;
}

interface RootCategory {
  id: string;
  name: string;
  subcategories?: Subcategory[];
}

interface RootCategoriesQueryData {
  amazonProductCategoryTaxonomy: RootCategory[];
}

export default async function CategoriesPage() {
  const response: RootCategoriesQueryData = await fetch(
    process.env.NEXT_GRAPHQL_API_URL as string,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_GRAPHQL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GET_ROOT_CATEGORIES, // GraphQL query to fetch root categories
        variables: {
          input: {
            domain: "US",
          },
        },
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((errror) => console.error(errror));

  return (
    <Suspense fallback={<div>Loading products...</div>}>
      {/* Hero Section */}
      <HeroSection
        title="Welcome to Our Store"
        description="Discover amazing categories and products tailored just for you."
        ctaText="Explore Categories"
        ctaLinkId="categories-section"
        backgroundImage="/assets/hero-background.jpg" // Replace with actual path
      />

      {/* Categories Section */}
      <section
        id="categories-section"
        className="bg-background py-8 px-4 sm:px-6 lg:px-12"
      >
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <span className="block w-12 h-1 bg-secondary"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-textMedium mb-6 leading-snug">
            Explore Our Categories
          </h2>
          <div className="flex justify-center items-center">
            <span className="block w-12 h-1 bg-secondary"></span>
          </div>
        </div>
        <div className="space-y-2">
          {response?.amazonProductCategoryTaxonomy.map((category) => (
            <CategoryItem key={category.id} item={category} />
          ))}
        </div>
      </section>
    </Suspense>
  );
}
