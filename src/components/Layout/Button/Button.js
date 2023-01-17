import React, { Fragment, useContext, useState, useEffect } from 'react'
import CartContext from '../../../store/cart-context'
import CartIcon from '../../Cart/CartIcon'
import classes from './Button.module.css'

const Button = (props) => {

  const cartContext = useContext(CartContext);
  const cartItems = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const [btnIsHighlighted, setbtnIsHighlighted] = useState(false)

  const btnClasses = `${classes.button} ${btnIsHighlighted && classes.bump}`;

  useEffect(() => {
    if (cartContext.items.length === 0 ) {
      return;
    } 
    setbtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setbtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [cartContext.items])
  

  return (
    <Fragment>
      <button onClick={props.onClick} className={btnClasses}>
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