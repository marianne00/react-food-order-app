import React from 'react'
import Modal from '../../UI/Modal/Modal'

import classes from './Cart.module.css'

const Cart = (props) => {
  const cartItems = [{
    id: 'c1',
    name: 'sushi',
    amount: 2,
    price: 12.99
  }].map((cartItem) => {
    return <li key={cartItem.id}>{cartItem.name}</li>
  })

  return (
    <Modal onClose={props.onCartToggle}>
      <div>
        <ul className={classes['cart-items']}>
          {cartItems}
        </ul>
        <div className={classes.total}>
          <span>Total amount: </span>
          <span>35.62</span>
        </div>
        <div className={classes.actions}>
          <button 
            onClick={props.onCartToggle} 
            className={classes['button--alt']}>
              Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  )
}

export default Cart