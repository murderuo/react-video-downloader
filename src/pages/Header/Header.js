import HeaderStyles from '../../Styles/Header.module.css';
import logo from '../../img/log.png';
import React from 'react';

function Header() {
  return (
    <header className={HeaderStyles.header}>
      <nav className={HeaderStyles.navbar}>
        <div className={HeaderStyles.logo}>
          <img src={logo} />
        </div>

        <div className={HeaderStyles.links}>
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default React.memo(Header);
