import React from 'react';
import Aux from '../../hoc/Aux';
import Classes from './layout.css'

const layout = (props) => (
<Aux>
    <div>
        Toolbar, SideDrawer,BackDrop
    </div>
    <main className={classes.Content}>
        {props.children}
    </main>
</Aux>
);

export default layout;