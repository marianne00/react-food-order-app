import React, { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import Modal from '../../UI/Modal/Modal'
import CartItem from '../CartItem/CartItem'

import classes from './Cart.module.css'

const Cart = (props) => {

  const cartContext = useContext(CartContext);

  const cartAddItemHandler = (item) => {

  }

  const cartRemoveItemHandler = (id) => {}

  const cartItems = cartContext.items.map((cartItem) => {
    return <CartItem 
      key={cartItem.id}
      name={cartItem.name}
      price={cartItem.price}
      amount={cartItem.amount}
      onRemove={cartRemoveItemHandler.bind(null, cartItem.id)}
      onAdd={cartAddItemHandler.bind(null, cartItem)} />
    // return <li key={cartItem.id}>{cartItem.name}</li>
  })

  const totalAmount = `${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.lenght > 0;

 

  return (
    <Modal onClose={props.onCartToggle}>
      <div>
        <ul className={classes['cart-items']}>
          {cartItems}
        </ul>
        <div className={classes.total}>
          <span>Total amount: </span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button 
            onClick={props.onCartToggle} 
            className={classes['button--alt']}>
              Close
          </button>
          { hasItems && <button className={classes.button}>Order</button> }
        </div>
      </div>
    </Modal>
  )
}

export default Cart