import "./SearchBar.scss";
import searchIcon from "../../assets/icon/search.svg";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div className="search">
      <img src={searchIcon} alt="search" className="search__icon" />

      <input
        type="text"
        placeholder="Поиск"
        className="search__input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
