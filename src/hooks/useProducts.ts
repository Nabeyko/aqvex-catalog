import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import type { Product } from '../types/product';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getProducts();
        setProducts(data);
      } catch {
        setError('Не вдалося завантажити товари');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return {
    products,
    loading,
    error,
  };
};