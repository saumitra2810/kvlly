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
        height: '0.8em',
      }}
    />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1>I'm Kelly Vaughn &mdash;</h1>
      <h2>Entrepreneur, Developer, & Shopify Expert</h2>
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
