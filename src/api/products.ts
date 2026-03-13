import type { Product, ProductsResponse } from '../types/product';

const BASE_URL = '/products.json';

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const { data }: ProductsResponse = await response.json();

  return data.products;
};