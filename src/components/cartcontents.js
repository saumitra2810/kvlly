import React, { useContext, useEffect, useState } from 'react'
import ShopContext from './shopcontext'
import LineItem from './lineitem'
import Link from 'gatsby'

const CartContents = () => {
  const context = useContext(ShopContext)
  const { checkout } = context

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <div className="cart-contents" data-line-items={line_items.length}>
      <div className="hasLineItems">
        <div className="cart-heading">
          <div>Item</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
          <div />
        </div>
        <div className="line-items">{line_items}</div>
        <div className="checkout">
          <h3>Subtotal: ${checkout.subtotalPrice}</h3>
          <button onClick={handleCheckout}>Check out</button>
        </div>
      </div>
    </div>
  )
}

export default CartContents
