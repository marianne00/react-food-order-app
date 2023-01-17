import React, { useReducer } from 'react'
import CartContext from './cart-context'

// initial state value
const defaultCartState = {
  items: [],
  totalAmount: 0
};

// reducer function
const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
}

const CartProvider = (props) => {

  const [cartState, dispatchCartActions] = useReducer(cartReducer, defaultCartState)

  const addItemHandler = (item) => {
    dispatchCartActions({ type: 'ADD_ITEM', item: item });
  }

  const removeItemHandler = (id) => {
    dispatchCartActions({ type: 'REMOVE_ITEM', id: id })
  }

  // pass the value to cart context
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  }

  return (
    <CartContext.Provider value={cartContext}> 
      {props.children} 
    </CartContext.Provider>
  )
}

export default CartProvider