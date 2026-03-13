import './SearchBar.scss';
import searchIcon from '../../assets/icon/search.svg';

export const SearchBar = () => {
  return (
    <div className="search">
      <img
        src={searchIcon}
        alt="search"
        className="search__icon"
      />

      <input
        type="text"
        placeholder="Поиск"
        className="search__input"
      />
    </div>
  );
};