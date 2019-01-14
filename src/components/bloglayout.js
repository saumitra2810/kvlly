import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.scss'

const BlogLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query BlogTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
          {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer> */}
        </div>
      </>
    )}
  />
)

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout
