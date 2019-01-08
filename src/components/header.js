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
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
