import React from 'react';
import styles from './nav.module.css';

const NavigationItem = (props) => (
    <li
      className={styles['nav']}
    >
      <a
        className={props.active ? styles.active : null}
        href={props.link}
      >
        {props.children}
      </a>
    </li>
);
export default NavigationItem;