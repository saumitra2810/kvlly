import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.scss'

const BlogLayout = ({ featuredImage, description, children }) => (
  <StaticQuery
    query={graphql`
      query BlogTitleQuery {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Helmet title={data.site.siteMetadata.title}>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={`${featuredImage}`} />
          <meta name="twitter:description" content={`${description}`} />
        </Helmet>
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
