import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
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
        <a href="https://shop.kvlly.com">Shop</a>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
