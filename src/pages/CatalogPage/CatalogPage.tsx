import { useMemo, useState } from "react";
import { Header } from "../../components/Header/Header";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SortSelect } from "../../components/SortSelect/SortSelect";
import { useProducts } from "../../hooks/useProducts";
import "./CatalogPage.scss";
import { Pagination } from "../../components/Pagination/Pagination";
import { Footer } from "../../components/Footer/Footer";

export const CatalogPage = () => {
  const { products, loading, error } = useProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isPopularDesc, setIsPopularDesc] = useState(true);

  const ITEMS_PER_PAGE = 12;

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleSortToggle = () => {
    setIsPopularDesc((previousValue) => !previousValue);
    setCurrentPage(1);
  };

  const processedProducts = useMemo(() => {
    const normalizedQuery = searchQuery.toLowerCase().trim();

    return products
      .filter((product) => product.name.toLowerCase().includes(normalizedQuery))
      .sort((productA, productB) =>
        isPopularDesc
          ? productB.reviews_count - productA.reviews_count
          : productA.reviews_count - productB.reviews_count,
      );
  }, [products, searchQuery, isPopularDesc]);

  const totalPages = Math.ceil(processedProducts.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const visibleProducts = processedProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="page">
        <div className="catalog-page-container">
          <Header />

          <main className="catalog-page">
            <div className="catalog-page__top">
              <SearchBar value={searchQuery} onChange={handleSearchChange} />
            </div>

            <div className="catalog-page__toolbar">
              <p className="catalog-page__count">
                {processedProducts.length} товаров
              </p>

              <SortSelect isDesc={isPopularDesc} onToggle={handleSortToggle} />
            </div>

            <div className="catalog-page__grid">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {visibleProducts.length === 0 && (
              <p className="catalog-page__empty">Ничего не найдено</p>
            )}

            {totalPages > 1 && (
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            )}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};
