import HeaderStyles from '../../Styles/Header.module.css';

function Header() {
  return (
    <header className={HeaderStyles.header}>
      <nav className={HeaderStyles.navbar}>
        <div className={HeaderStyles.logo}></div>

        <div className={HeaderStyles.links}>
          <ul>
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">İnstagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
