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
        <CartContext.Provider value={initialContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider