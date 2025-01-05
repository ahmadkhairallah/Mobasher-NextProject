import { gql } from "@apollo/client";

// Query to fetch the root categories and their subcategories
// This query retrieves a list of root categories and their associated subcategories
export const GET_ROOT_CATEGORIES = `
  query GetRootCategories($input: AmazonProductCategoryTaxonomyInput) {
    amazonProductCategoryTaxonomy(input: $input) {
      id
      name
      subcategories {
        id
        name
      }
    }
  }
`;

// Query to fetch products by category
// This query retrieves product data based on a given category,
// including pagination info and available refinement options
export const GET_PRODUCTS_BY_CATEGORY = `
  query GetProductsByCategory($input: AmazonProductSearchResultsInput!) {
  amazonProductSearchResults(input: $input) {
    productResults {
      results {
        asin
        title
        price {
          display
        }
        imageUrls
      }
      pageInfo {
        currentPage
        totalPages
      }
    }
    availableRefinements {
      name
      options {
        name
      }
    }
  }
}
`;

// Query to fetch detailed information about a specific product
// This query fetches detailed data for a single product,
// including its title, description, price, images, and reviews
export const GET_PRODUCT_DETAILS = gql`
  query GetProductDetails($input: AmazonProductInput!) {
    amazonProduct(input: $input) {
      id
      title
      description
      price {
        display
      }
      images {
        url
      }
      reviews {
        rating
        comment
      }
    }
  }
`;
