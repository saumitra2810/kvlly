import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useContext, useEffect, useState } from 'react'
import ShopContext from './shopcontext'

const countQuantity = lineItems => {
  let quantity = 0

  lineItems.forEach(item => {
    quantity = quantity + item.quantity
  })

  return quantity
}

const Header = () => {
  const context = useContext(ShopContext)
  const { checkout } = context
  const [quantity, setQuantity] = useState(
    countQuantity(checkout ? checkout.lineItems : [])
  )

  useEffect(
    () => {
      setQuantity(countQuantity(checkout ? checkout.lineItems : []))
    },
    [checkout]
  )

  return (
    <div>
      <div
        style={{
          background: '#8A2387', // eslint-disable-next-line
          background:
            '-webkit-linear-gradient(to right, #F27121, #E94057, #8A2387)', // eslint-disable-next-line
          background: 'linear-gradient(to right, #F27121, #E94057, #8A2387)',
          padding: '0.5em 30px',
        }}
      >
        <div
          className="header-links"
          style={{
            maxWidth: '960px',
            textAlign: 'right',
            margin: '0 auto',
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/now">Now</Link>
          <Link to="/speaking">Speaking</Link>
          <Link to="/buy-kelly-coffee">Coffee</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
