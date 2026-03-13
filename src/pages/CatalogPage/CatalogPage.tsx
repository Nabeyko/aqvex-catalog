import { Header } from "../../components/Header/Header";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SortSelect } from "../../components/SortSelect/SortSelect";
import { useProducts } from "../../hooks/useProducts";
import "./CatalogPage.scss";

export const CatalogPage = () => {
  const { products, loading, error } = useProducts();

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
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};
