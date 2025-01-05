
import { Product } from "@/types/Product";

export interface CategoryProductsParams {
  params: {
    categoryId: string;
  };
}

export interface ProductsQueryData {
  amazonProductSearchResults: {
    productResults: {
      results: Product[];
    };
  };
}
