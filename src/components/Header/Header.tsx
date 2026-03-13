import "./Header.scss";
import logo from "../../assets/aqvex-logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header__logo-link" aria-label="AQVEX home">
        <img src={logo} alt="AQVEX logo" className="header__logo" />
      </a>
    </header>
  );
};
