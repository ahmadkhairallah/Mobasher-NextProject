import { Product } from "./Product";

export interface GetProductDetailsData {
    amazonProduct: {
      id: string;
      title: string;
      description?: string;
      price: {
        amount: string;
        currency: string;
      };
      images: {
        url: string;
      }[];
      reviews: {
        rating: number;
        comment: string;
      }[];
    };
  }
  
  export interface GetProductDetailsVars {
    input: {
      productId: string;
      domain: string;
    };
  }
  
  export interface GetProductsByCategoryData {
    amazonProductSearchResults: {
      productResults: {
        results: Product[];
        pageInfo: {
          currentPage: number;
          totalPages: number;
        };
      };
    };
  }
  
  export interface GetProductsByCategoryVars {
    input: {
      searchTerm: string;
    };
  }
  