import React from 'react';
import classes from './BurgerIngredient.css';

const burgerIngredient = (props) => {
 let Ingredient = null;

 switch (props.type) {
   case('bread-bottom'):
     Ingredient =
       <div className={ classes.BreadBottom}>
       </div>;
   break;
   case('bread-top'):
     Ingredient = (
       <div className={classes.BreadTop}>
         <div className={classes.Seeds1} />
         <div className={classes.Seeds2} />
       </div>
   );
break;
   case('meat'):
     Ingredient =
       <div className={classes.Meat} />;
   break;
   case('cheese'):
     Ingredient =
       <div className={classes.Cheese} />;
     break;
   case('bacon'):
     Ingredient =
       <div className={classes.Bacon} />;
     break;
   case('salad'):
     Ingredient =
       <div className={classes.Salad} />;
     break;
   default:
     Ingredient = null;
 }
 return Ingredient;
};

export default burgerIngredient;