import React from 'react';
import Aux from '../Aux';
import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from "../../components/Navigation/SideDrawer";

const Layout = (props) => (
  <Aux>
        <Toolbar />
        <SideDrawer/>
      <main className={styles['content']}>
          {props.children}
      </main>
  </Aux>
);

export default Layout;
