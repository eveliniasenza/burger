import React, {Component} from 'react';
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
  render() {

    let Ingredient = null;

    switch (this.props.type) {
      case('bread-bottom'):
        Ingredient =
          <div className={classes.BreadBottom}>
          </div>;
        break;
      case('bread-top'):
        Ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}/>
            <div className={classes.Seeds2}/>
            <div className={classes.Seeds3}/>
            <div className={classes.Seeds4}/>
            <div className={classes.Seeds5}/>
          </div>
        );
        break;
      case('meat'):
        Ingredient =
          <div className={classes.Meat}/>;
        break;
      case('cheese'):
        Ingredient =
          <div className={classes.Cheese}/>;
        break;
      case('bacon'):
        Ingredient =
          <div className={classes.Bacon}/>;
        break;
      case('salad'):
        Ingredient =
          <div className={classes.Salad}/>;
        break;
      default:
        Ingredient = null;
    }
    return Ingredient;
  }
}
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};


export default BurgerIngredient;