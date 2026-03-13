import { useState } from "react";
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

  const ITEMS_PER_PAGE = 12;
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProducts = products.slice(
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
      <div className="catalog-page-container">
        <Header />

        <main className="catalog-page">
          <div className="catalog-page__top">
            <SearchBar />
          </div>

          <div className="catalog-page__toolbar">
            <p className="catalog-page__count">{products.length} товаров</p>
            <SortSelect />
          </div>

          <div className="catalog-page__grid">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </main>
      </div>
      <Footer />
    </>
  );
};
