import React from 'react'

import CartContents from '../components/cartcontents'
import SEO from '../components/seo'

const CartPage = props => (
  <>
    <SEO
      title="Cart | Kelly Vaughn"
      image="https://kvlly.com/images/coffee-kelly.jpg"
    />
    <h1>Cart &mdash;</h1>
    <div className="cart">
      <CartContents />
    </div>
  </>
)

export default CartPage
