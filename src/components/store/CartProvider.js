import React from 'react'

import CartContext from './cart-context'

const CartProvider = (props) => {
    const addItemToCartHandler = (item) => {

    }

    const removeItemFromCartHandler = (id) => {

    }

    const initialContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

  return (
        <cartContext value={initialContext}>
            {props.children}
        </cartContext>
    )
}

export default CartProvider