import React, { Fragment, useState } from 'react'
import Cart from '../../Cart/Cart/Cart'
import CartIcon from '../../Cart/CartIcon'
import classes from './Button.module.css'

const Button = (props) => {
  return (
    <Fragment>
      <button onClick={props.onClick} className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </Fragment>
  )
}

export default Button