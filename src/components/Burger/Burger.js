import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const Burger = (props) => {
  // const ingredients = props.ingredients
  // {salad: 2, bacon: 3, cheese: 2, meat: 1}
  // const arr = Object.keys(ingredients)
  // arr -> [salad, bacon, cheese, meat]
  // arr.map(key => {
    // ingredients[key] -> vale 0 o 0 o 2 o 0 dependiendo el elemento de la key
    // vamos a suponer que estamos en cheese
    // [...Array(props.ingredients[igKey])] -> [null, null]
    // si yo le hago map, voy a imprimir el total de ese ingrediente
    // Si estamos en chesee, entonces voy a imprimir dos burger ingredients,
    // de tipo chese
  // })

  let transformedIngredients = Object.keys(props.ingredients)
  .map(igKey => {
    return [...Array(props.ingredients[igKey])].map(() => {
      return <BurgerIngredient type={igKey}/>;
    });
  })
.reduce((arr, el) => {
  return arr.concat(el)
},[]);

if (transformedIngredients.length === 0){
transformedIngredients= <p>Please enter a ingredient!</p>
}
    return(
      <div className={styles.burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>

      </div>
    );
};
export default Burger;
