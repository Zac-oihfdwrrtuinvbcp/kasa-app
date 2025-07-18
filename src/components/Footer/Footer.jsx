import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <svg className="footer__logo" viewBox="0 0 211 68">
          <use href={`/Icons.svg#logo`}></use>
        </svg>
      <span className="footer__text">© 2020 Kasa. All rights reserved.</span>
    </footer>
  );
}
export default Footer;