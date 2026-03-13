import "./SortSelect.scss";
import sortIcon from "../../assets/icon/sort.svg";
import arrowIcon from "../../assets/icon/arrow-down.svg";

type Props = {
  isDesc: boolean;
  onToggle: () => void;
};

export const SortSelect = ({ isDesc, onToggle }: Props) => {
  return (
    <button type="button" className="sort" onClick={onToggle}>
      <img src={sortIcon} alt="sort" className="sort__icon" />

      <span className="sort__text">По популярности</span>

      <img src={arrowIcon} alt="arrow" className={`sort__arrow ${isDesc ? "sort__arrow--desc" : "sort__arrow--asc"}`} />
    </button>
  );
};