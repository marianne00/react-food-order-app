import React, { Fragment, useContext } from 'react'
import CartContext from '../../../store/cart-context'
import CartIcon from '../../Cart/CartIcon'
import classes from './Button.module.css'

const Button = (props) => {

  const cartContext = useContext(CartContext);
  const cartItems = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <Fragment>
      <button onClick={props.onClick} className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>{cartItems}</span>
      </button>
    </Fragment>
  )
}

export default Button