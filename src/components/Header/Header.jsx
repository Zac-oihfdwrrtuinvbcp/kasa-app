import "./Header.scss";
import { NavLink } from "react-router-dom";
import Icons from "../../assets/Icons.svg"

function Header() {
  return (
    <header className="header">
      {/* <img src={LOGO} alt="Kasa Logo" className="header__logo" /> */}
      <svg className="header__logo">
        <use href={`${Icons}#logo`}></use>
      </svg>

      <nav className="header__nav">
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
