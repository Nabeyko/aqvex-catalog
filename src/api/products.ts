import type { Product, ProductsResponse } from '../types/product';

const BASE_URL =
  'https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1/products';

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const { data }: ProductsResponse = await response.json();

  return data.products;
};