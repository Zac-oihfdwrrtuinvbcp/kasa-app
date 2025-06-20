import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <p>KASA LOGO</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">A Propos</Link>
            </li>
          </ul>
        </nav>
    </header>
  );
}
export default Header;