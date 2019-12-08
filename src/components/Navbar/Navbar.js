import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.scss';

const Navbar = () => (
  <header className={styles.component}>
    <div className={styles.wrapper}>
      <h1>Bulletin Board</h1>
      <nav>
        <Link
          className={styles.navlink}
          to="writesomething">
          Write
        </Link>

        <Link
          className={styles.navlink}
          to="readsomething">
          Read
        </Link>
      </nav>
    </div>
  </header>
);

export default Navbar;
