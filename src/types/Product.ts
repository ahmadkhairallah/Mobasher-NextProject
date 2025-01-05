export interface Product {
  asin: string;
  title: string;
  mainImageUrl: string;
  imageUrls: string[];
  featureBullets: string[];
  rating: number;
  bookDescription: string;
  price: {
    currency: string;
    value: number;
  };
}

export interface ProductDetails {
  title: string;
  description: string;
}

export interface ProductResults {
  results: Product[];
  pageInfo: {
    currentPage: number;
    totalPages: number;
  };
}

export interface GetProductsByCategoryData {
  amazonProductSearchResults: {
    productResults: ProductResults;
  };
}

export interface GetProductsByCategoryVars {
  input: {
    searchTerm: string;
  };
}
