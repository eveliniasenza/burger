import React, {Component} from 'react';
import Layoutx from './components/Layout/Layoutx';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component{
  render() {
    return(
      <div>
        <Layoutx>
          <BurgerBuilder />
        </Layoutx>
      </div>
    );
  }
}
export default App;
