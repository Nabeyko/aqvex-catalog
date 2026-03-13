import type { Product } from "../../types/product";
import basketIcon from "../../assets/icon/basket.svg";
import starIcon from "../../assets/icon/star.svg";
import arrowIcon from "../../assets/icon/arrow-down.svg";
import checkMark from "../../assets/icon/check-mark.svg";
import waterDrop from "../../assets/icon/waterdrop.svg";

import "./ProductCard.scss";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const selectedVolume =
    product.volumes.find((volume) => volume.id === product.selected_volume_id)
      ?.label ||
    product.volumes[0]?.label ||
    "";

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img
          src="https://placehold.co/347x347?text=Product"
          alt={product.name}
          className="product-card__image"
        />
      </div>

      <div className="product-card__price-line">
        <span className="product-card__old-price">{product.old_price}</span>

        <span className="product-card__price">
          {product.price} {product.currency}
        </span>

        <span className="product-card__discount">
          {product.discount_percent}%
        </span>
      </div>

      <p className="product-card__title">{product.name}</p>

      <div className="product-card__reviews">
        <div className="product-card__stars">
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              src={starIcon}
              alt="star"
              className="product-card__star"
            />
          ))}
        </div>

        <span className="product-card__reviews-count">
          {product.reviews_count}
        </span>
      </div>

      <div className="product-card__status-line">
        <img src={checkMark} alt="check" className="product-card__status-icon" />
        <span className="product-card__status">В наличии</span>

        <img src={waterDrop} alt="water drop" className="product-card__waterDrop-icon" />
        <span className="product-card__category">{product.category}</span>
      </div>

      <div className="product-card__actions">
        <button type="button" className="product-card__volume">
          {selectedVolume}
          <span className="product-card__volume-arrow">
            <img src={arrowIcon} alt="arrow" className="product-card__arrowIcon" />
          </span>
        </button>

        <button type="button" className="product-card__button">
          <img
            src={basketIcon}
            alt="basket"
            className="product-card__button-icon"
          />

          <span>В корзину</span>
        </button>
      </div>
    </article>
  );
};
