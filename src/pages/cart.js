import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Cart from '../components/cart'

const CartPage = props => (
  <Layout>
    <SEO
      title="Cart | Kelly Vaughn"
      image="https://kvlly.com/images/coffee-kelly.jpg"
    />
    <h1>Cart &mdash;</h1>
    <Cart />
  </Layout>
)

export default CartPage
