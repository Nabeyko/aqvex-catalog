import './SortSelect.scss';
import sortIcon from '../../assets/icon/sort.svg';
import arrowIcon from '../../assets/icon/arrow-down.svg';

export const SortSelect = () => {
  return (
    <div className="sort">
      <img
        src={sortIcon}
        alt="sort"
        className="sort__icon"
      />

      <span className="sort__text">
        По популярности
      </span>

      <img
        src={arrowIcon}
        alt="arrow"
        className="sort__arrow"
      />
    </div>
  );
};