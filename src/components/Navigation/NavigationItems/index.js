import React from 'react';
import NavigationItem from "../NavigationItem";
import styles from './nvigation.module.css';

const NavigationItems = () => (
  <ul className={styles['Navigation']}>
    <NavigationItem link="/" >
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">
      Checkout
    </NavigationItem>
  </ul>
);

export default NavigationItems;