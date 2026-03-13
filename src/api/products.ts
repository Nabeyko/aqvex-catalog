import type { Product, ProductsResponse } from "../types/product";

const BASE_URL = "/products.json";

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const { data }: ProductsResponse = await response.json();

  if (import.meta.env.DEV) {
    await delay(1000);
  }

  return data.products;
};