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
    const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);

    // check if item is already in cart - if yes, only update the amount
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      console.log('items', updatedItem);
    } else {
      updatedItems = state.items.concat(action.item);
    }

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