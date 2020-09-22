import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSumary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
  .map(igKey => {
    return (
    <li key={igKey}>
    <span style={{TextTransform: 'capitalize'}}> {igKey}:{props.ingredients[igKey]}</span>
    </li>);
  });
  return(
    <Aux>
      <h3>Your order</h3>
      <p> A delicious burger with the following ingredients:</p>

      <ul>
      {ingredientsSummary}
      </ul>
      <p><strong> Total Price:{props.price.toFixed(2)} </strong></p>
      <p> Continue to checkout? </p>
      <Button buttonType="Danger" clicked={props.purchaseCancelled}>NO</Button>
      <Button buttonType="Success" clicked={props.purchaseContinue}>YES</Button>
    </Aux>
  )
};


export default OrderSumary;
