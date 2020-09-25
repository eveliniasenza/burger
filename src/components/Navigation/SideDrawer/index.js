import React from 'react';
import logo from '../../Logo/index';
import NavigationItems from "../NavigationItems";
import styles from './sideDrawer.module.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from '../../../hoc/Aux/Aux';

const SideDrawer = (props) => {
  return(
    <Aux>
      <Backdrop show={props.open} clicked={props.close}/>
      <div className={styles['sideDrawer']}>
        <logo />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;