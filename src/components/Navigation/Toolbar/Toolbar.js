import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/index';
import NavigationItems from "../NavigationItems";

const Toolbar = (props) => (
  <header className={styles['Toolbar']}>
    <div>MENU</div>
    <Logo/>
    <nav>
      <NavigationItems/>
    </nav>
  </header>
);

export default Toolbar;
